"use client"

import { useEffect, useRef, useState } from "react"
import { Info } from "lucide-react"

// Simple component that only shows a message in preview environments
export default function PointCloudViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDeployedEnvironment, setIsDeployedEnvironment] = useState(false)

  // Use the blob URL for the GLB file
  const glbFileUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/scene.glb"

  useEffect(() => {
    // Check if we're in a deployed environment (not preview)
    const hostname = window.location.hostname
    const isPreview =
      hostname.includes("vusercontent.com") ||
      hostname.includes("v0.dev") ||
      hostname.includes("localhost") ||
      hostname.includes("esm.v0.dev")

    setIsDeployedEnvironment(!isPreview)

    // Only attempt to initialize Three.js if we're in a deployed environment
    if (!isPreview) {
      // This code will only run in the deployed environment
      const initializeThreeJS = async () => {
        try {
          // Dynamically import Three.js
          const THREE = await import("three")
          const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls.js")
          const { GLTFLoader } = await import("three/examples/jsm/loaders/GLTFLoader.js")

          if (!containerRef.current) return

          // Set up scene
          const scene = new THREE.Scene()
          scene.background = new THREE.Color(0xf5f5f5)

          const camera = new THREE.PerspectiveCamera(
            75,
            containerRef.current.clientWidth / containerRef.current.clientHeight,
            0.1,
            1000,
          )
          camera.position.z = 5

          const renderer = new THREE.WebGLRenderer({ antialias: true })
          renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)

          // Clear container before appending
          containerRef.current.innerHTML = ""
          containerRef.current.appendChild(renderer.domElement)

          // Add lights
          const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
          scene.add(ambientLight)

          const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
          directionalLight.position.set(1, 1, 1)
          scene.add(directionalLight)

          // Add orbit controls
          const controls = new OrbitControls(camera, renderer.domElement)
          controls.enableDamping = true
          controls.dampingFactor = 0.05

          // Load the GLB file from the blob URL
          const loader = new GLTFLoader()
          loader.load(
            glbFileUrl, // Use the blob URL instead of local path
            (gltf) => {
              // Center the model
              const box = new THREE.Box3().setFromObject(gltf.scene)
              const center = box.getCenter(new THREE.Vector3())
              gltf.scene.position.x = -center.x
              gltf.scene.position.y = -center.y
              gltf.scene.position.z = -center.z

              // Add the model to the scene
              scene.add(gltf.scene)

              // Adjust camera to fit the model
              const size = box.getSize(new THREE.Vector3())
              const maxDim = Math.max(size.x, size.y, size.z)
              const fov = camera.fov * (Math.PI / 180)
              let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
              cameraZ *= 0.8 // Zoom in closer to the model by default

              const minZ = box.min.z
              const cameraToFarEdge = minZ < 0 ? -minZ + cameraZ : cameraZ - minZ
              camera.far = cameraToFarEdge * 3
              camera.updateProjectionMatrix()

              // Reset controls
              controls.maxDistance = cameraToFarEdge * 1.2
              controls.minDistance = cameraZ * 0.5
              controls.target.set(0, 0, 0)
              controls.update()
            },
            undefined,
            (error) => {
              console.error("Error loading GLB:", error)
            },
          )

          // Animation loop
          let animationFrameId: number

          const animate = () => {
            animationFrameId = requestAnimationFrame(animate)
            controls.update()
            renderer.render(scene, camera)
          }

          animate()

          // Handle window resize
          const handleResize = () => {
            if (!containerRef.current) return

            const width = containerRef.current.clientWidth
            const height = containerRef.current.clientHeight

            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width, height)
          }

          window.addEventListener("resize", handleResize)

          // Cleanup function
          return () => {
            if (animationFrameId) {
              cancelAnimationFrame(animationFrameId)
            }

            window.removeEventListener("resize", handleResize)

            if (renderer) {
              renderer.dispose()
            }

            if (controls) {
              controls.dispose()
            }
          }
        } catch (error) {
          console.error("Error initializing Three.js:", error)
        }
      }

      // Call the initialization function
      initializeThreeJS()
    }
  }, [glbFileUrl])

  return (
    <div className="relative">
      <div ref={containerRef} className="w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
        {!isDeployedEnvironment && (
          <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 max-w-md">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-blue-800 font-medium text-lg">3D Viewer Preview</h3>
                  <p className="text-blue-700 mt-2">The 3D viewer is only available in the deployed environment.</p>
                  <div className="mt-4 p-4 bg-blue-100 rounded-md">
                    <p className="text-blue-800 font-medium mb-2">To view the 3D model:</p>
                    <ol className="text-blue-700 list-decimal pl-5 space-y-2">
                      <li>Deploy this project to Vercel</li>
                      <li>The model will load from: {glbFileUrl}</li>
                      <li>Visit the deployed site to see your 3D model</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

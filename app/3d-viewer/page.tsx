import SiteLayout from "@/components/site-layout"
import PointCloudViewer from "@/components/point-cloud-viewer"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "3D Point Cloud Viewer | SGRT Research",
  description: "Interactive visualization of 3D point cloud data for advanced radiation therapy planning and analysis.",
}

export default function ThreeDViewerPage() {
  return (
    <SiteLayout>
      <section className="w-full py-8 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-5xl">3D Point Cloud Viewer</h1>
            <p className="max-w-[600px] text-jefferson-brightBlue text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Interactive visualization of 3D point cloud data for advanced radiation therapy planning and analysis.
            </p>
            <Link href="/" className="jefferson-outline-button inline-flex mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <ScrollAnimation>
            <div className="mx-auto max-w-5xl">
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-start">
                <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium">About the 3D Viewer</p>
                  <p className="text-blue-700 text-sm mt-1">
                    This interactive 3D point cloud viewer visualizes different types of medical data. You can rotate,
                    zoom, and explore the 3D models to better understand spatial relationships in treatment planning.
                    Use the controls below the viewer to interact with the visualization.
                  </p>
                </div>
              </div>

              <PointCloudViewer />

              <h3 className="text-xl font-bold text-jefferson-deepBlue mt-8">Navigation Controls</h3>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-jefferson-slate mb-2">Use these controls to interact with the 3D visualization:</p>
                <ul className="list-disc pl-5 text-jefferson-slate space-y-1">
                  <li>
                    <strong>Click and drag</strong>: Rotate the view
                  </li>
                  <li>
                    <strong>Scroll wheel</strong>: Zoom in/out
                  </li>
                  <li>
                    <strong>Zoom buttons</strong>: Increase or decrease magnification
                  </li>
                  <li>
                    <strong>Reset View</strong>: Return to the default position
                  </li>
                  <li>
                    <strong>Auto Rotate</strong>: Toggle automatic rotation
                  </li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h4 className="font-medium text-gray-800">About This Model</h4>
                <p className="text-gray-700 text-sm mt-1">
                  This 3D model represents a point cloud dataset used in our surface-guided radiation therapy research.
                  The visualization helps clinicians and researchers understand the spatial relationships between
                  anatomical structures and treatment targets.
                </p>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <h4 className="font-medium text-yellow-800">Note About Preview Mode</h4>
                <p className="text-yellow-700 text-sm mt-1">
                  The interactive 3D viewer requires specific browser capabilities and is optimized for the production
                  environment. If you're seeing a static image instead of the interactive viewer, this could be due to:
                </p>
                <ul className="list-disc pl-5 text-yellow-700 text-sm mt-2">
                  <li>Viewing the site in a preview environment</li>
                  <li>Browser compatibility issues</li>
                  <li>Required libraries not loading correctly</li>
                </ul>
                <p className="text-yellow-700 text-sm mt-2">
                  Try accessing the site in a different browser or check back later when the site is fully deployed.
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </SiteLayout>
  )
}

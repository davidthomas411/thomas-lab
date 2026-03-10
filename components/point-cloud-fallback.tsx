import { ZoomIn, ZoomOut, RotateCcw, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PointCloudFallbackProps {
  modelUrl?: string
  errorMessage?: string
}

export default function PointCloudFallback({ modelUrl, errorMessage }: PointCloudFallbackProps) {
  return (
    <div className="relative">
      <div className="w-full aspect-[4/3] sm:aspect-[16/9] bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center flex-col p-4 text-center">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 max-w-md">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-blue-800 font-medium text-lg">3D Viewer Issue</h3>
                <p className="text-blue-700 mt-2">
                  {errorMessage || "The 3D viewer encountered an issue while loading."}
                </p>
                <div className="mt-4 p-4 bg-blue-100 rounded-md">
                  <p className="text-blue-800 font-medium mb-2">Troubleshooting Steps:</p>
                  <ul className="list-disc pl-5 text-blue-700 text-sm space-y-1 text-left">
                    <li>Check if your browser supports WebGL</li>
                    <li>Try using a different browser (Chrome, Firefox, or Edge)</li>
                    <li>Make sure your graphics drivers are up to date</li>
                    <li>Disable browser extensions that might interfere with 3D rendering</li>
                    <li>Try refreshing the page</li>
                  </ul>
                  <div className="relative w-full aspect-video bg-white rounded-md overflow-hidden mt-4">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <p className="text-gray-500 text-sm">3D Point Cloud Visualization</p>
                    </div>
                  </div>
                  <p className="text-blue-700 text-sm mt-3">
                    {modelUrl && (
                      <span className="block mt-1 text-xs text-blue-600">Model: {modelUrl.split("/").pop()}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mock controls for preview */}
      <div className="mt-4 flex flex-wrap gap-2 justify-center">
        <Button variant="outline" size="sm" disabled>
          <ZoomIn className="h-4 w-4 mr-1" /> Zoom In
        </Button>
        <Button variant="outline" size="sm" disabled>
          <ZoomOut className="h-4 w-4 mr-1" /> Zoom Out
        </Button>
        <Button variant="outline" size="sm" disabled>
          <RotateCcw className="h-4 w-4 mr-1" /> Reset View
        </Button>
        <Button variant="outline" size="sm" disabled>
          Auto Rotate
        </Button>
      </div>
    </div>
  )
}

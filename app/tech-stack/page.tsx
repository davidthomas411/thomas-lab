import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap } from "lucide-react"
import Link from "next/link"
import AnimatedSvgChart from "./components/animated-svg-chart"
import SiteLayout from "@/components/site-layout"
import TechVideoPlayer from "./components/tech-video-player"
import PointCloudViewer from "./components/point-cloud-viewer"
import SectionScroller from "./components/section-scroller"
import { TechCard } from "./components/tech-card"
import { Suspense } from "react"

export default function TechStackPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-jefferson-deepBlue text-white">
        {/* Section Scroller - Wrapped in Suspense */}
        <Suspense fallback={null}>
          <SectionScroller />
        </Suspense>

        {/* Header */}
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Technology Stack</h1>
          <p className="text-xl text-blue-200 max-w-3xl">
            Core technologies powering our research and applications.
            <Badge className="ml-2 bg-blue-900/50 text-blue-200 border-blue-700">Internal Use</Badge>
          </p>
        </div>

        {/* Clinical Workflow Overview - Moved to top of page */}
        <div className="container mx-auto px-4 mb-12">
          <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Clinical Workflow</CardTitle>
              <CardDescription className="text-blue-200">From patient scan to treatment observation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-blue-950/30 rounded-lg p-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QvMsqJVVakOMY8G6A8I6EbwRAQaPOP.png"
                      alt="Clinical workflow diagram"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-blue-300 mt-2 text-center">
                    Clinical workflow from pre-treatment day (Day 0) to each treatment day (Day n)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SOTA Progress Chart - Moved outside tabs with clarification */}
        <div className="container mx-auto px-4 mb-12">
          <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl text-white">State of the Art: Pose Estimation</CardTitle>
              <CardDescription className="text-blue-200">
                Industry-wide progress in human pose estimation accuracy over the past decade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-blue-200">
                  This chart represents the field-wide advancement in pose estimation technology based on published
                  research benchmarks, not our specific lab results. We leverage these state-of-the-art methods in our
                  clinical applications.
                </p>
              </div>
              <AnimatedSvgChart />
            </CardContent>
          </Card>
        </div>

        {/* State of the Art Banner */}
        <div className="container mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-start">
              <Zap className="h-10 w-10 text-yellow-300 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Implementation Strategy</h2>
                <p className="text-white/90">
                  We prioritize open-source solutions with established benchmarks, balancing innovation with
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Tabs - Full Page */}
        <div className="container mx-auto px-4 pb-20">
          <Tabs defaultValue="mocap" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-start bg-blue-900/20 p-1 rounded-lg mb-8">
              <TabsTrigger value="mocap" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Motion Capture
              </TabsTrigger>
              <TabsTrigger value="depth-from-image" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Depth from Image
              </TabsTrigger>
              <TabsTrigger value="body-models" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Body Models
              </TabsTrigger>
              <TabsTrigger value="skeleton" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Skeleton Models
              </TabsTrigger>
              <TabsTrigger value="soft-tissue" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Soft Tissue
              </TabsTrigger>
              <TabsTrigger value="3d-reconstruction" className="data-[state=active]:bg-blue-800 py-2 px-4">
                3D Reconstruction
              </TabsTrigger>
              <TabsTrigger value="pipelines" className="data-[state=active]:bg-blue-800 py-2 px-4">
                Pipelines
              </TabsTrigger>
            </TabsList>

            {/* Motion Capture */}
            <TabsContent value="mocap" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="EasyMocap"
                    description="Multi-view motion capture system."
                    link={null}
                    github="https://github.com/zju3dv/EasyMocap"
                    tags={["Motion Capture"]}
                  />

                  <TechCard
                    title="Multi-view Geometry"
                    description="Camera calibration techniques."
                    link={null}
                    github={null}
                    tags={["Camera Calibration"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Motion Capture</CardTitle>
                      <CardDescription className="text-blue-200">Foundation for patient digital twins</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="relative h-[300px] rounded-lg overflow-hidden bg-blue-950/30">
                          <div className="p-6 h-full flex flex-col justify-center">
                            <h3 className="text-xl font-semibold mb-4 text-center text-white">
                              Motion Capture Process
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">1. Data Capture</div>
                                <p className="text-sm text-center text-white">
                                  Multiple cameras capture patient positioning
                                </p>
                              </div>
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">2. Pose Estimation</div>
                                <p className="text-sm text-center text-white">AI estimates 3D pose from images</p>
                              </div>
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">3. Model Fitting</div>
                                <p className="text-sm text-center text-white">Pose data fits body models to patient</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Depth from Image */}
            <TabsContent value="depth-from-image" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="Video-Depth-Anything"
                    description="Depth estimation from video."
                    link={null}
                    github="https://github.com/DepthAnything/Video-Depth-Anything"
                    tags={["Depth Estimation"]}
                    isNew={true}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Depth from Image</CardTitle>
                      <CardDescription className="text-blue-200">
                        AI extracts depth from standard 2D images
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex justify-center">
                          <div className="h-[350px] w-full rounded-lg shadow-lg overflow-hidden">
                            <TechVideoPlayer
                              src="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/views1-4.mp4"
                              caption="Multi-view visualization with depth estimation"
                              className="object-top"
                            />
                          </div>
                        </div>
                        <div className="bg-blue-950/30 p-4 rounded-lg">
                          <h3 className="text-lg font-semibold text-white mb-2">Depth Anything v2</h3>
                          <p className="text-blue-200">
                            Extracts accurate depth maps from standard RGB images, enabling 3D understanding from 2D
                            inputs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Body Models */}
            <TabsContent value="body-models" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="SMPL"
                    description="3D model of the human body."
                    link="https://smpl.is.tue.mpg.de/"
                    github={null}
                    tags={["Body Modeling"]}
                  />

                  <TechCard
                    title="RVH Mesh Registration"
                    description="Fitting SMPL to 3D scans."
                    link={null}
                    github="https://github.com/bharat-b7/RVH_Mesh_Registration"
                    tags={["Registration"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Body Models</CardTitle>
                      <CardDescription className="text-blue-200">Accurate representation of patients</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="relative rounded-lg overflow-hidden bg-black">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zKS1ua3FT6azYEnI3Ir4TypU0fKuT2.png"
                            alt="Body models showing CT scan, surface model, and skeletal representations"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-black mt-4">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UV33a2woSpLQsMgQ7QNWTxDoxBLRhB.png"
                            alt="Treatment position body models with cross-sections"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-blue-900/30 to-blue-900/10 mt-4">
                          <img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QocXwDEAPoy97P3pix0XmqGjE5SyDY.png"
                            alt="3D model with internal organs visualization"
                            className="w-full h-auto max-h-[300px] object-contain mx-auto"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Diagnostic Pose</h4>
                            <p className="text-blue-200 text-sm">
                              Models configured to match imaging data for assessment.
                            </p>
                          </div>
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Treatment Pose</h4>
                            <p className="text-blue-200 text-sm">
                              Models transformed to predict anatomy during therapy.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Skeleton Models */}
            <TabsContent value="skeleton" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="OSSO"
                    description="Statistical skeleton model."
                    link="https://osso.is.tue.mpg.de/"
                    github={null}
                    tags={["Skeleton"]}
                  />

                  <TechCard
                    title="SKEL"
                    description="Skeleton modeling tools."
                    link={null}
                    github="https://github.com/MarilynKeller/SKEL"
                    tags={["Modeling"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Skeleton Models</CardTitle>
                      <CardDescription className="text-blue-200">Internal anatomy representation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="h-[350px] rounded-lg shadow-lg overflow-hidden">
                          <TechVideoPlayer
                            src="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/skel"
                            caption="Skeleton model animation and tracking"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Motion Capture</h4>
                            <p className="text-blue-200 text-sm">
                              Multiple cameras track movement to reconstruct skeletal position.
                            </p>
                          </div>
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Computational Phantoms</h4>
                            <p className="text-blue-200 text-sm">
                              Combines skeleton with tissue for complete anatomy representation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Soft Tissue */}
            <TabsContent value="soft-tissue" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="HIT"
                    description="Human Internal Tissue model."
                    link={null}
                    github="https://github.com/MarilynKeller/HIT"
                    tags={["Soft Tissue"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Soft Tissue Modeling</CardTitle>
                      <CardDescription className="text-blue-200">Detailed internal anatomy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="relative h-[300px] rounded-lg overflow-hidden">
                          <img
                            src="https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/hit.png"
                            alt="HIT (Human Internal Tissue) model visualization"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Multi-layer Models</h4>
                            <p className="text-blue-200 text-sm">
                              Models different tissue types including adipose and lean tissues.
                            </p>
                          </div>
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Skeleton Integration</h4>
                            <p className="text-blue-200 text-sm">
                              Combines with skeleton models for complete anatomy representation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* 3D Reconstruction */}
            <TabsContent value="3d-reconstruction" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="MASt3R"
                    description="Monocular 3D Reconstruction."
                    link="https://huggingface.co/spaces/naver/MASt3R"
                    github="https://github.com/naver/mast3r"
                    tags={["3D Reconstruction"]}
                  />

                  <TechCard
                    title="VGGT"
                    description="Video Gaussian Splatting."
                    link="https://huggingface.co/spaces/facebook/vggt"
                    github="https://github.com/facebookresearch/vggt"
                    tags={["Gaussian Splatting"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Environment Reconstruction</CardTitle>
                      <CardDescription className="text-blue-200">Digital treatment environments</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Embed the 3D viewer directly */}
                        <div className="rounded-lg overflow-hidden bg-blue-950/30">
                          <div className="p-4">
                            <h3 className="text-xl font-semibold mb-4 text-center text-white">
                              3D Point Cloud Visualization
                            </h3>
                            <div className="w-full aspect-[4/3] sm:aspect-[16/9]">
                              <PointCloudViewer />
                            </div>
                            <div className="mt-4 text-center">
                              <Link
                                href="/3d-viewer"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md inline-flex items-center transition-colors"
                              >
                                View in Full Screen <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Point Cloud</h4>
                            <p className="text-blue-200 text-sm">Creates detailed point clouds of treatment rooms.</p>
                          </div>
                          <div className="bg-blue-950/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2 text-white">Camera Calibration</h4>
                            <p className="text-blue-200 text-sm">
                              Enables precise spatial reconstruction for digital twins.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Pipelines */}
            <TabsContent value="pipelines" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <TechCard
                    title="HSMR"
                    description="Human Skeleton Mesh Recovery for biomechanically accurate skeleton reconstruction."
                    link={null}
                    github="https://github.com/IsshikiHugh/HSMR"
                    tags={["Skeleton Reconstruction", "CVPR25"]}
                    isNew={true}
                  />

                  <TechCard
                    title="Pose2Sim"
                    description="Motion capture pipeline."
                    link={null}
                    github="https://github.com/perfanalytics/pose2sim"
                    tags={["Pipeline"]}
                  />

                  <TechCard
                    title="CEB Mocap MPP2SOS"
                    description="Skeletal tracking pipeline."
                    link={null}
                    github={null}
                    tags={["Motion Capture"]}
                  />
                </div>

                <div className="lg:col-span-2">
                  <Card className="bg-blue-900/20 border-blue-800/50 overflow-hidden h-full">
                    <CardHeader>
                      <CardTitle className="text-white">Integration Pipelines</CardTitle>
                      <CardDescription className="text-blue-200">
                        Connecting technologies into workflows
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="relative h-[300px] rounded-lg overflow-hidden bg-blue-950/30">
                          <div className="p-6 h-full flex flex-col justify-center">
                            <h3 className="text-xl font-semibold mb-4 text-center text-white">Pipeline Integration</h3>
                            <div className="flex items-center justify-center space-x-2">
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">Motion Capture</div>
                                <div className="text-sm text-center text-white">EasyMocap</div>
                              </div>
                              <ArrowRight className="h-8 w-8 text-blue-400" />
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">Skeleton Recovery</div>
                                <div className="text-sm text-center text-white">HSMR</div>
                              </div>
                              <ArrowRight className="h-8 w-8 text-blue-400" />
                              <div className="bg-blue-900/40 p-3 rounded-lg">
                                <div className="text-blue-300 font-semibold mb-2 text-center">Digital Twins</div>
                                <div className="text-sm text-center text-white">SMPL & OSSO Models</div>
                              </div>
                            </div>
                            <div className="flex justify-center my-4">
                              <div className="px-8 py-2 bg-pink-900/40 rounded-lg">
                                <div className="text-pink-300 font-semibold text-center">Pipeline Technologies</div>
                                <div className="text-sm text-center text-white">HSMR • Pose2Sim • CEB Mocap</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SiteLayout>
  )
}

"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface AcknowledgmentItemProps {
  name: string
  link?: string
  techStackSection?: string
}

function AcknowledgmentItem({ name, link, techStackSection }: AcknowledgmentItemProps) {
  if (techStackSection) {
    return (
      <Link href={`/tech-stack?section=${techStackSection}`} className="text-jefferson-brightBlue hover:underline">
        {name}
      </Link>
    )
  }

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-jefferson-brightBlue hover:underline">
        {name}
      </a>
    )
  }

  return <span>{name}</span>
}

export function Acknowledgments({ className }: { className?: string }) {
  return (
    <section className={cn("py-12 bg-gray-50", className)}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Acknowledgments</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-6 text-center">
            We gratefully acknowledge the contributions of the broader open-source and academic communities whose ideas,
            design patterns, and tools have inspired aspects of our research. In particular, we drew conceptual
            inspiration from several public repositories and projects related to medical imaging, radiation therapy, and
            computer vision for healthcare applications.
          </p>

          <p className="text-gray-700 mb-8 text-center">
            We'd like to recognize the following projects which
            informed aspects of our approach and interface design.
          </p>

          <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div>
              <h4 className="font-medium mb-2">Motion Capture</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="EasyMocap" techStackSection="easymocap" />
                </li>
                <li>
                  <AcknowledgmentItem name="Pose2Sim" techStackSection="pose2sim" />
                </li>
                <li>
                  <AcknowledgmentItem name="CEB Mocap" techStackSection="mocap" />
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Body Models</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="SMPL" techStackSection="smpl" />
                </li>
                <li>
                  <AcknowledgmentItem name="RVH Mesh Registration" techStackSection="body" />
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Skeleton Models</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="OSSO" techStackSection="osso" />
                </li>
                <li>
                  <AcknowledgmentItem name="SKEL" techStackSection="skel" />
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Depth Estimation</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="Video-Depth-Anything" techStackSection="depth" />
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Soft Tissue</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="HIT" techStackSection="hit" />
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">3D Reconstruction</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <AcknowledgmentItem name="MASt3R" techStackSection="mast3r" />
                </li>
                <li>
                  <AcknowledgmentItem name="VGGT" techStackSection="vggt" />
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-gray-500 text-center mt-8">
            We are grateful to all the researchers and developers who have made their work available to the community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Acknowledgments

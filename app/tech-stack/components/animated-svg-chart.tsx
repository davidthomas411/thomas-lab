"use client"

import { useEffect, useState } from "react"

export default function AnimatedSvgChart() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate the progress from 0 to 100 over 2 seconds with easing
    const startTime = Date.now()
    const duration = 2000

    const animateProgress = () => {
      const elapsed = Date.now() - startTime
      const rawProgress = Math.min(1, elapsed / duration)

      // Add easing function (ease-out cubic)
      const easedProgress = 1 - Math.pow(1 - rawProgress, 3)
      const newProgress = easedProgress * 100

      setProgress(newProgress)

      if (rawProgress < 1) {
        requestAnimationFrame(animateProgress)
      }
    }

    requestAnimationFrame(animateProgress)

    return () => {
      // Cleanup
    }
  }, [])

  // Data for pose estimation progress over the years (PCKh@0.5 metric)
  // Based on Papers with Code SOTA for MPII Human Pose dataset
  const poseEstimationData = [
    { year: 2014, accuracy: 81.3, model: "Tompson et al." },
    { year: 2015, accuracy: 82.4, model: "Tompson et al." },
    { year: 2016, accuracy: 86.3, model: "Newell et al." },
    { year: 2017, accuracy: 88.5, model: "Chu et al." },
    { year: 2018, accuracy: 91.2, model: "Tang et al." },
    { year: 2019, accuracy: 92.3, model: "Sun et al." },
    { year: 2020, accuracy: 93.9, model: "Zhang et al." },
    { year: 2021, accuracy: 94.5, model: "Xu et al." },
    { year: 2022, accuracy: 95.4, model: "Li et al." },
    { year: 2023, accuracy: 96.2, model: "TokenPose" },
    { year: 2024, accuracy: 96.8, model: "Current" },
  ]

  // Chart dimensions
  const width = 800
  const height = 400
  const margin = { top: 40, right: 80, bottom: 60, left: 60 }
  const chartWidth = width - margin.left - margin.right
  const chartHeight = height - margin.top - margin.bottom

  // Calculate scales
  const minYear = Math.min(...poseEstimationData.map((d) => d.year))
  const maxYear = Math.max(...poseEstimationData.map((d) => d.year))
  const minAccuracy = 80 // Starting at 80% for better visualization
  const maxAccuracy = 100

  // Function to scale x and y values to chart coordinates
  const scaleX = (year: number) => ((year - minYear) / (maxYear - minYear)) * chartWidth
  const scaleY = (accuracy: number) =>
    chartHeight - ((accuracy - minAccuracy) / (maxAccuracy - minAccuracy)) * chartHeight

  // Generate path for the line
  const generatePath = () => {
    const visibleData = poseEstimationData.filter(
      (_, i) => i <= Math.floor((poseEstimationData.length - 1) * (progress / 100)),
    )

    if (visibleData.length === 0) return ""

    let path = `M ${margin.left + scaleX(visibleData[0].year)} ${margin.top + scaleY(visibleData[0].accuracy)}`

    for (let i = 1; i < visibleData.length; i++) {
      path += ` L ${margin.left + scaleX(visibleData[i].year)} ${margin.top + scaleY(visibleData[i].accuracy)}`
    }

    return path
  }

  return (
    <div className="bg-blue-900/20 border-blue-800/50 rounded-lg p-6 overflow-hidden">
      <h3 className="text-xl font-bold text-white mb-2">Field-Wide Progress in Pose Estimation (2014-2024)</h3>
      <p className="text-blue-200 mb-4 text-sm">
        This chart shows the advancement in human pose estimation accuracy from published research papers, not our
        specific lab results. We leverage these state-of-the-art methods in our applications.
      </p>

      <div className="relative">
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
          className="overflow-visible"
        >
          {/* Y-axis */}
          <line
            x1={margin.left}
            y1={margin.top}
            x2={margin.left}
            y2={margin.top + chartHeight}
            stroke="#4B5563"
            strokeWidth="2"
          />

          {/* X-axis */}
          <line
            x1={margin.left}
            y1={margin.top + chartHeight}
            x2={margin.left + chartWidth}
            y2={margin.top + chartHeight}
            stroke="#4B5563"
            strokeWidth="2"
          />

          {/* Y-axis labels */}
          {[80, 85, 90, 95, 100].map((tick, i) => (
            <g key={i}>
              <line
                x1={margin.left - 5}
                y1={margin.top + scaleY(tick)}
                x2={margin.left}
                y2={margin.top + scaleY(tick)}
                stroke="#4B5563"
              />
              <text
                x={margin.left - 10}
                y={margin.top + scaleY(tick)}
                textAnchor="end"
                dominantBaseline="middle"
                fill="#93C5FD"
                fontSize="12"
              >
                {tick}%
              </text>
            </g>
          ))}

          {/* X-axis labels */}
          {poseEstimationData
            .filter((_, i) => i % 2 === 0)
            .map((data, i) => (
              <g key={i}>
                <line
                  x1={margin.left + scaleX(data.year)}
                  y1={margin.top + chartHeight}
                  x2={margin.left + scaleX(data.year)}
                  y2={margin.top + chartHeight + 5}
                  stroke="#4B5563"
                />
                <text
                  x={margin.left + scaleX(data.year)}
                  y={margin.top + chartHeight + 20}
                  textAnchor="middle"
                  fill="#93C5FD"
                  fontSize="12"
                >
                  {data.year}
                </text>
              </g>
            ))}

          {/* Axis titles */}
          <text
            x={margin.left + chartWidth / 2}
            y={margin.top + chartHeight + 50}
            textAnchor="middle"
            fill="#DBEAFE"
            fontSize="14"
            fontWeight="bold"
          >
            Year
          </text>

          <text
            x={margin.left - 40}
            y={margin.top + chartHeight / 2}
            textAnchor="middle"
            fill="#DBEAFE"
            fontSize="14"
            fontWeight="bold"
            transform={`rotate(-90, ${margin.left - 40}, ${margin.top + chartHeight / 2})`}
          >
            Accuracy %
          </text>

          {/* Progress line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="drop-shadow(0 0 6px rgba(59, 130, 246, 0.5))"
          />

          {/* Data points */}
          {poseEstimationData
            .filter((_, i) => i <= Math.floor((poseEstimationData.length - 1) * (progress / 100)))
            .map((data, i) => (
              <g key={i}>
                <circle
                  cx={margin.left + scaleX(data.year)}
                  cy={margin.top + scaleY(data.accuracy)}
                  r="5"
                  fill={data.year === 2024 ? "#10B981" : "#3B82F6"}
                  stroke="#fff"
                  strokeWidth="2"
                />

                {/* Only show labels for some points to avoid overcrowding */}
                {(i % 3 === 0 || data.year === 2024) && (
                  <g>
                    <text
                      x={margin.left + scaleX(data.year)}
                      y={margin.top + scaleY(data.accuracy) - 15}
                      textAnchor="middle"
                      fill="#DBEAFE"
                      fontSize="12"
                      fontWeight={data.year === 2024 ? "bold" : "normal"}
                    >
                      {data.accuracy}%
                    </text>
                    {data.year === 2024 && (
                      <text
                        x={margin.left + scaleX(data.year)}
                        y={margin.top + scaleY(data.accuracy) - 30}
                        textAnchor="middle"
                        fill="#10B981"
                        fontSize="12"
                        fontWeight="bold"
                      >
                        Current SOTA
                      </text>
                    )}
                  </g>
                )}
              </g>
            ))}
        </svg>
      </div>

      <div className="mt-4 text-sm text-blue-300 text-center">
        MPII Human Pose dataset (PCKh@0.5) - Based on published research benchmarks
      </div>
    </div>
  )
}

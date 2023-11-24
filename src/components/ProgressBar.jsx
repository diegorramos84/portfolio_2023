import React from "react"
import icons from "./icons"
import { Progress } from "@/components/ui/progress"

const ProgressBar = ({ progress, projectName, techArray, projectLink }) => {
  const tech = techArray

  const matchingIcons = []

  tech.forEach((techName) => {
    const matchingIcon = icons.find((icon) => icon.name === techName)

    if (matchingIcon) {
      matchingIcons.push(matchingIcon)
    }
  })

  return (
    <a
      href={projectLink}
      target="_blank"
      className="progress-container w-full lg:w-80 mb-2 hover:scale-105"
    >
      <div className="flex justify-between mb-1">
        <div className="progress-text-left flex ">
          <span className="text-base font-medium mr-2">{projectName}</span>
          <span className="tech-icons flex">
            {matchingIcons.map((i) => (
              <img className="mr-1" key={i.name} src={i.src} alt={i.name} />
            ))}
          </span>
        </div>
        <span className="text-sm font-medium">{progress}</span>
      </div>
      <div className="progress-bar rounded-full h-2.5 border w-full">
        <Progress value={progress} />
      </div>
    </a>
  )
}

export default ProgressBar

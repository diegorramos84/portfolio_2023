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
      className="progress-container w-80 mb-2 hover:scale-105"
    >
      <div class="flex justify-between mb-1">
        <div class="progress-text-left flex ">
          <span class="text-base font-medium mr-2">{projectName}</span>
          <span class="tech-icons flex">
            {matchingIcons.map((i) => (
              <img class="mr-1" key={i.name} src={i.src} alt={i.name} />
            ))}
          </span>
        </div>
        <span class="text-sm font-medium">{progress}</span>
      </div>
      <div class="progress-bar rounded-full h-2.5 border w-full">
        <Progress value={progress} />
      </div>
    </a>
  )
}

export default ProgressBar

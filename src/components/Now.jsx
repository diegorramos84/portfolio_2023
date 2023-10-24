import React from "react"
import ProgressBar from "./ProgressBar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { InfoCircledIcon } from "@radix-ui/react-icons"

const project1 = {
  name: "FinanceApp",
  tech: ["django", "react"],
  progress: 40,
  projectLink: "https://github.com/diegorramos84/finance-dashboard",
}

const project2 = {
  name: "Portfolio v2",
  tech: ["js", "react"],
  progress: 20,
  projectLink: "https://github.com/diegorramos84/portfolio_2023",
}

const NowMovement = () => (
  <TooltipProvider>
    <Tooltip>
      <a href="https://sive.rs/nowff" target="_blank">
        <TooltipTrigger asChild>
          <InfoCircledIcon className="text-grayMuted cursor-pointer" />
        </TooltipTrigger>
      </a>
      <TooltipContent>
        <p>what is this?</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)
const Now = () => {
  return (
    <div class="now-container w-full p-4">
      <div class="now flex justify-between">
        <div class="now-text flex mb-2">
          <h2 class="text-2xl mr-1">Now</h2>
          <NowMovement />
        </div>
        <div class="now-icon flex">
          <span class="live-icon absolute inline-flex rounded-full h-3 w-3 bg-greenish animate-ping opacity-75"></span>
          <span class="live-icon relative inline-flex rounded-full h-3 w-3 bg-greenish"></span>
        </div>
      </div>
      <div class="w-full flex flex-col items-center">
        <ProgressBar
          progress={project1.progress}
          projectName={project1.name}
          techArray={project1.tech}
          projectLink={project1.projectLink}
        />
        <ProgressBar
          progress={project2.progress}
          projectName={project2.name}
          techArray={project2.tech}
          projectLink={project2.projectLink}
        />
      </div>
    </div>
  )
}

export default Now

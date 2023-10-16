import React, { useState } from 'react'
import icons from './icons'
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Icon = ({ src, alt, text}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <img className="h-12 p-2 hover:bg-accent hover:text-accent-foreground cursor-default" src={src} alt={alt} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
  )


const IconList = () => {
  const [startIndex, setStartIndex] = useState(0)

  const scrollLeft = () => {
    setStartIndex(Math.max(startIndex - 1, 0))
  }

  const scrollRight = () => {
    setStartIndex(Math.min(startIndex + 1, Math.max(icons.length - 5, 0)))
  }

  return (
    <div className="icons-container flex items-center justify-center px-2">
      <Button variant="outline" size="icon" className="prev-btn" onClick={scrollLeft} disabled={startIndex === 0}>
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ChevronLeftIcon className='h-4 w-4'/>
              </TooltipTrigger>
              <TooltipContent>
                <p>Previous</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
      </Button>

      <div className="icons flex justify-center p-4 scroll-smooth">
        {icons.slice(startIndex, startIndex + 5).map((icon, idex) => (
          <Icon key={idex} src={icon.src} alt={icon.alt} text={icon.text} />
        ))}
      </div>

      <Button variant="outline" size="icon" className="next-btn" onClick={scrollRight} disabled={startIndex >= Math.max(icons.length - 5, 0)}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <ChevronRightIcon className='h-4 w-4'/>
            </TooltipTrigger>
            <TooltipContent>
              <p>Next</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Button>
    </div>
  )
}

export default IconList

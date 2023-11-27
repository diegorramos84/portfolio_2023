import React from "react"
import { Badge } from "@/components/ui/badge"

const badgeClassNames = {
  python: "bg-pythonBGColor text-pythonTextColor",
  django: "bg-djangoBGColor text-djangoTextColor",
  flask: "bg-black text-white",
  javascript: "bg-jsBGColor text-jsTextColor",
  react: "bg-reactBGColor text-reactTextColor",
  node: "bg-nodeBGColor text-white",
  rails: "bg-railsBGColor text-white",
}

const Badges = ({ type, text }) => {
  const badgeClassName = badgeClassNames[type] || ""

  return (
    <Badge className={`${badgeClassName} opacity-80 mr-1 cursor-default`}>
      {text}
    </Badge>
  )
}

export default Badges

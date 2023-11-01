import React from "react"
import { Badge } from "@/components/ui/badge"

const badgeClassNames = {
  python: "bg-pythonBGColor text-pythonTextColor",
  django: "bg-djangoBGColor text-djangoTextColor",
  flask: "bg-black text-white",
  js: "bg-jsBGColor text-jsTextColor",
  react: "bg-reactBGColor text-reactTextColor",
  node: "bg-nodeBGColor text-white",
}

const Badges = ({ type, text }) => {
  const badgeClassName = badgeClassNames[type] || ""

  return <Badge className={`${badgeClassName} cursor-default`}>{text}</Badge>
}

export default Badges

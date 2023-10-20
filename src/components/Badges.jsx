import React from 'react';
import { Badge } from "@/components/ui/badge"

const Badges = ({ type, text }) => {
  let badgeClassName

  switch (type) {
    case 'python':
      badgeClassName = 'bg-pythonBGColor text-pythonTextColor'
      break
    case 'django':
      badgeClassName = 'bg-djangoBGColor text-djangoTextColor'
      break
    case 'js':
      badgeClassName = 'bg-jsBGColor text-jsTextColor'
      break
    case 'react':
      badgeClassName = 'bg-reactBGColor text-reactTextColor'
      break
  }

  return (
    <Badge
      className={`${badgeClassName} cursor-default`}
      >{text}
    </Badge>
  )
}

export default Badges

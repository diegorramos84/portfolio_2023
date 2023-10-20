import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Badges from "./Badges";

const RecentProjects = () => {
  return (
    <div class="opacity-10 container recent-projects ext-card-foreground items-center flex flex-col gap-4">
      <div class="recent-title py-4">
        <h1 class='text-xl lg:text-5xl'>Featured Projects</h1>
      </div>
      <div class="recent-cards flex flex-col lg:flex-row gap-4">
      <Card class="bg-card rounded-xl text-card-foreground shadow">
        <CardHeader>
          <CardTitle>Homework Heroes</CardTitle>
          <img src='/projects/homeworkheroes.png' alt="homework heroes landing page pic" width="500" height="500"/>
          <CardDescription>Homework app to assist neurodivergent kids with their homework</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div class="badges flex gap-2">
            <Badges type="python" text="python" />
            <Badges type="django" text="django" />
            <Badges type="js" text="javascript" />
            <Badges type="react" text="react" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Homework Heroes</CardTitle>
          <img src='/projects/homeworkheroes.png' alt="homework heroes landing page pic" width="500" height="500"/>
          <CardDescription>Homework app to assist neurodivergent kids with their homework</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div className="badges flex gap-2">
            <Badges type="python" text="python" />
            <Badges type="django" text="django" />
            <Badges type="js" text="javascript" />
            <Badges type="react" text="react" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Homework Heroes</CardTitle>
          <img src='/projects/homeworkheroes.png' alt="homework heroes landing page pic" width="500" height="500"/>
          <CardDescription>Homework app to assist neurodivergent kids with their homework</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
          <div className="badges flex gap-2">
            <Badges type="python" text="python" />
            <Badges type="django" text="django" />
            <Badges type="js" text="javascript" />
            <Badges type="react" text="react" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      </div>
    </div>
  )
}

export default RecentProjects

import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Badges from "./Badges"

const RecentProjects = () => {
  return (
    <div class="opacity-10 container recent-projects ext-card-foreground items-center flex flex-col gap-4">
      <div class="recent-title py-4">
        <h1 class="text-xl lg:text-5xl">Featured Projects</h1>
      </div>
      <div class="recent-cards flex flex-col lg:flex-row gap-4">
        <Card className="bg-card rounded-xl text-card-foreground shadow-lg border border-gray-800  hover:border-greenish lg:w-1/3 flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Symphona</CardTitle>
            <img
              src="/projects/room-music.jpeg"
              alt="symphona page pic"
              style={{ width: "100%", height: "200px" }}
            />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              The App aims to give your guests control over the party's music
              playlist, and even the power to vote on skipping tracks they're
              not vibing with
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div class="badges flex gap-2">
              <Badges type="python" text="python" />
              <Badges type="django" text="django" />
              <Badges type="js" text="javascript" />
              <Badges type="react" text="react" />
            </div>
          </CardFooter>
        </Card>
        <Card className="bg-card rounded-xl text-card-foreground shadow-lg border border-gray-800  hover:border-greenish lg:w-1/3  flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Homework Heroes</CardTitle>
            <img
              style={{ width: "100%", height: "200px" }}
              src="/projects/homework-resized.png"
              alt="homework heroes landing page pic"
            />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              A user-friendly platform designed to support neurodivergent
              students in early education. It offers structured routines and
              avoids sensory overload, ensuring a secure and enjoyable learning
              experience. Specifically developed to help neurodivergent kids
              with homework.
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="badges flex gap-2">
              <Badges type="python" text="python" />
              <Badges type="flask" text="flask" />
              <Badges type="js" text="javascript" />
              <Badges type="react" text="react" />
            </div>
          </CardFooter>
        </Card>
        <Card className="bg-card rounded-xl text-card-foreground shadow-lg border border-gray-800  hover:border-greenish lg:w-1/3 flex flex-col justify-between">
          <CardHeader>
            <CardTitle>Braincrastination</CardTitle>
            <img
              style={{ width: "100%", height: "200px" }}
              src="/projects/calendar.png"
              alt="homework heroes landing page pic"
            />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Organisational application for students to plan their tasks to
              allow effective distributed practicing. The application contains a
              calendar, to do list for each day and a gamified component to
              encourage students to complete their tasks.
            </p>
          </CardContent>
          <CardFooter className="mt-auto">
            <div className="badges flex gap-2">
              <Badges type="python" text="python" />
              <Badges type="django" text="django" />
              <Badges type="js" text="javascript" />
              <Badges type="react" text="react" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default RecentProjects

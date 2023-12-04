import React, { useState } from "react"
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

import ReactPlayer from "react-player"
import Modal from "react-modal"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Badges from "./Badges"
import { Button } from "@/components/ui/button"

const RecentProjects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState(null)

  const handleDemo = (url) => {
    const demo = url
    setModalIsOpen(true)
    setSelectedDemo(demo)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedDemo(null)
  }

  return (
    // opacity-10
    <div className="container recent-projects ext-card-foreground items-center flex flex-col gap-4">
      <div className="recent-title py-4">
        <h1 className="text-xl lg:text-5xl">Featured Projects</h1>
      </div>
      <div className="recent-cards flex flex-col lg:flex-row gap-4">
        <Card className="relative bg-card rounded-xl text-card-foreground shadow-lg border  border-darkReaderBorder  lg:w-1/3 flex flex-col justify-between hover:border-greenish">
          <CardHeader>
            <CardTitle className="flex justify-between items-center mb-2">
              <span className="flex-1">
                <h2 className="text-2xl text-center ">Symphona</h2>
              </span>
              <span className="hover:text-greenish hover:scale-110">
                <a
                  href="https://github.com/diegorramos84/room-music"
                  target="a_blank"
                >
                  <GitHubLogoIcon />
                </a>
              </span>
            </CardTitle>
            <div className="bg-white">
              <div className="relative group">
                <img
                  src="/projects/room-music.jpeg"
                  alt="symphona page pic"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  className="card-image bg-orange transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <Button
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-3 px-5 w-full rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-extrabold text-md"
                  onClick={() => {
                    handleDemo("/projects/musicapp.webm")
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
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
            <div className="badges flex gap-2">
              <Badges type="python" text="python" />
              <Badges type="django" text="django" />
              <Badges type="javascript" text="javascript" />
              <Badges type="react" text="react" />
            </div>
          </CardFooter>
        </Card>
        <Card className="relative bg-card rounded-xl text-card-foreground shadow-lg border  border-darkReaderBorder  lg:w-1/3 flex flex-col justify-between hover:border-greenish">
          <CardHeader>
            <CardTitle className="flex justify-between items-center mb-2">
              <span className="flex-1">
                <h2 className="text-2xl text-center ">Homework Heroes</h2>
              </span>
              <span className="hover:text-greenish hover:scale-110">
                <a
                  href="https://github.com/diegorramos84/Homework-Heroes"
                  target="a_blank"
                >
                  <GitHubLogoIcon />
                </a>
              </span>
            </CardTitle>
            <div className="bg-white">
              <div className="relative group">
                <img
                  src="/projects/homework-resized.png"
                  alt="homework heroes landing page pic"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  className="card-image bg-orange transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <Button
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-3 px-5 w-full rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-extrabold text-md"
                  onClick={() => {
                    handleDemo("/projects/homework.webm")
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
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
              <Badges type="javascript" text="javascript" />
              <Badges type="react" text="react" />
            </div>
          </CardFooter>
        </Card>
        <Card className="relative bg-card rounded-xl text-card-foreground shadow-lg border  border-darkReaderBorder  lg:w-1/3 flex flex-col justify-between hover:border-greenish">
          <CardHeader>
            <CardTitle className="flex justify-between items-center mb-2">
              <span className="flex-1">
                <h2 className="text-2xl text-center ">Braincrastination</h2>
              </span>
              <span className=" hover:text-greenish hover:scale-110">
                <a
                  href="https://github.com/JackDMoore/Brainiac-Brigade"
                  target="a_blank"
                >
                  <GitHubLogoIcon />
                </a>
              </span>
            </CardTitle>
            <div className="bg-white">
              <div className="relative group">
                <img
                  src="/projects/calendar.png"
                  alt="calendar landing page pic"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  className="card-image bg-orange transition-transform duration-300 transform scale-100 group-hover:scale-105"
                />
                <Button
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-3 px-5 w-full rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-extrabold text-md"
                  onClick={() => {
                    handleDemo("/projects/calendar.webm")
                  }}
                >
                  Watch Demo
                </Button>
              </div>
            </div>
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
              <Badges type="javascript" text="javascript" />
              <Badges type="react" text="react" />
              <Badges type="node" text="node" />
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex self-end">
        <a href="/projects_archive">
          <Button
            variant="outline"
            className="g-card rounded-xl text-card-foreground shadow-lg border  border-darkReaderBorder"
          >
            View Full Project archive{" "}
            <span className="pl-2">
              <ArrowRightIcon />
            </span>
          </Button>
        </a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Video Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
          content: {
            // width: "850px",
            height: "800px",
            margin: "auto", // Center the modal horizontally
            padding: "0px",
            border: "none",
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0)",
          },
        }}
      >
        <ReactPlayer
          url={selectedDemo}
          controls={true}
          muted={true}
          className="bg-dark overflow-hidden"
          playing={true}
          width="100%"
          height="100%"
        />
      </Modal>
    </div>
  )
}

export default RecentProjects

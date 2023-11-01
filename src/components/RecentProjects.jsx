import React, { useState, useRef } from "react"

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

import { animate } from "motion"

const RecentProjects = () => {
  const videoRef = useRef()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedDemo, setSelectedDemo] = useState(null)

  // const playPreview = animate(video)

  // const onHover = () => {
  //   animation.play
  // }

  // const handleMouseEnter = () => {
  //   // videoRef.current.style.display = "block"
  //   // videoRef.current.play()
  //   setShowModal(true)
  // }

  // const handleMouseLeave = () => {
  //   setShowModal(false)
  //   // videoRef.current.style.display = "none"
  //   videoRef.current.pause()
  //   videoRef.current.currenTime = 0
  // }

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
    // TODO: add back opacity-10 here
    <div className="opacity-10 container recent-projects ext-card-foreground items-center flex flex-col gap-4">
      <div className="recent-title py-4">
        <h1 className="text-xl lg:text-5xl">Featured Projects</h1>
      </div>
      <div className="recent-cards flex flex-col lg:flex-row gap-4">
        <Card className="relative bg-card rounded-xl text-card-foreground shadow-lg border border-gray-800 lg:w-1/3 flex flex-col justify-between hover:border-greenish">
          <CardHeader>
            <CardTitle className="flex justify-between items-center mb-1">
              <span className="flex-1">
                <h2 className="text-2xl text-center ">Symphona</h2>
              </span>
              <span className="absolute top-0 right-0 mt-2 mr-2 hover:text-greenish hover:scale-110">
                <a href="">
                  <i class="devicon-github-original text-2xl lg:text-2xl "></i>
                </a>
              </span>
            </CardTitle>
            <div>
              <div>
                <img
                  src="/projects/room-music.jpeg"
                  alt="symphona page pic"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  className="card-image"
                />
                <button
                  className="bg-warning"
                  onClick={() => {
                    handleDemo("/projects/musicapp.webm")
                  }}
                >
                  Demo
                </button>
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
            <CardTitle className="text-2xl flex justify-center">
              Homework Heroes
            </CardTitle>
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
            <CardTitle className="text-2xl flex justify-center">
              Braincrastination
            </CardTitle>
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
              <Badges type="js" text="javascript" />
              <Badges type="react" text="react" />
              <Badges type="node" text="node" />
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="flex self-end">
        <Button variant="outline">archive</Button>
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
            width: "850px",
            height: "600px",
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

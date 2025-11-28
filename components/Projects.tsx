"use client";
import React from "react";
import { color, motion } from "framer-motion";
import Card from "./Card";
export default function Projects() {
  return (
    <div className="flex justify-center flex-col mt-20">
      <div className="flex items-center justify-center">
        <motion.span
          initial={{ scale: 0.8, x: -80, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className=" text-3xl md:text-4xl font-bold"
        >{`<`}</motion.span>
        <motion.span
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-4xl md:text-5xl text-[#67e8f9] font-semibold"
        >
          Projects
        </motion.span>
        <motion.span
          initial={{ scale: 0.8, x: 100, opacity: 0 }}
          whileInView={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-3xl md:text-4xl font-bold"
        >{`/>`}</motion.span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-20 gap-10">
        {blogContent.map((blog) => (
          <Card blogContent={blog} key={blog.title} />
        ))}
      </div>
    </div>
  );
}

const blogContent = [

  {
    title: "Predix",
    description:
    "A prediction market platform where users can trade YES/NO shares in real-time, with live market depth and automated transaction matching.",
    image: "/images/Predix.png",
    techstack: [
      {
        name: "NextJs",
        color: "#61dbfb",
        img: "/nxt.png",
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Typescript",
        color: "#007acc",
        img: "/typescript-icon.svg",
      },
      {
        name: "Postgresql",
        color: "#336791",
        img: "/postgres.png",
      },
      {
        name: "Prisma",
        color: "#2d3748",
        img: "/image.png",
      },
      {
        name:"Redis",
        color:"#dc382d",
        img:"/redis.png",
      },
      {
        name:"WebSockets",
        color:"#2d3748",
        img: "/webs.png",
      }
    ],
    github: "https://github.com/Manav2209/Predix",
    demo: "https://drive.google.com/file/d/1fDaTrglvRaTPbJFB7XIOW1B3W1awEYKo/view?usp=sharing",
  },
  {
    title: "Exness",
    description:
      "Share your thoughts and ideas anonymously! Provide honest feedback to help us improve and deliver better content for you.",
    image: "/feedback.png",
    techstack: [
      {
        name: "NextJs",
        color: "#61dbfb",
        img: "/nxt.png",
      },
      {
        name: "Typescript",
        color: "#007acc",
        img: "/typescript-icon.svg",
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Postgresql",
        color: "#336791",
        img: "/postgres.png",
      },
      {
        name: "Prisma",
        color: "#2d3748",
        img: "/image.png",
      },
      {
        name: "Redis",
        color: "#dc382d",
        img: "/redis.png",
      },
      {
        name:"WebSockets",
        color:"#2d3748",
        img: "/webs.png",
      },
    ],
    github: "https://github.com/Manav2209/exness",
    demo: "https://drive.google.com/file/d/1TCOLTwsV2FcAa7A5B0qpGSJNd5SnpB-c/view?usp=drive_link",
  },
  {
    title: "Anomynous Feedback",
    description:
      "Share your thoughts and ideas anonymously! Provide honest feedback to help us improve and deliver better content for you.",
    image: "/feedback.png",
    techstack: [
      {
        name: "NextJs",
        color: "#61dbfb",
        img: "/nxt.png",
      },
      {
        name: "Typescript",
        color: "#007acc",
        img: "/typescript-icon.svg",
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Postgresql",
        color: "#336791",
        img: "/postgres.png",
      },
      {
        name: "Prisma",
        color: "#2d3748",
        img: "/image.png",
      },
    ],
    github: "https://github.com/Manav2209/feedback-message",
    demo: "https://drive.google.com/file/d/1fDaTrglvRaTPbJFB7XIOW1B3W1awEYKo/view?usp=sharing",
  },
  {
    title: "Ryde",
    description:
    "A cross-platform ride-hailing app that enables real-time booking, live tracking, fare estimation, and secure in-app payments.",

    image: "/snipit.png",
    techstack: [
      {
        name: "ReactNative",
        color: "#61dbfb",
        img: "/react.svg",
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Typescript",
        color: "#007acc",
        img: "/typescript-icon.svg",
      },
    ],
    github: "https://github.com/Manav2209/ryde",
    demo: "https://drive.google.com/file/d/1z2UAYjR0nytKmzES5BmKeieWR4sJ4ihv/view?usp=sharing",
  },
  {
    title: "FlipFrame",
    description:
    "An AI-powered animation platform that converts natural language prompts into academic animations using Gemini and Manim.",

    image: "/feedback.png",
    techstack: [
      {
        name: "NextJs",
        color: "#61dbfb",
        img: "/nxt.png",
      },
      {
        name: "Typescript",
        color: "#007acc",
        img: "/typescript-icon.svg",
      },
      {
        name: "TailwindCSS",
        color: "#06b6d4",
        img: "/tailwind.png",
      },
      {
        name: "Postgresql",
        color: "#336791",
        img: "/postgres.png",
      },
      {
        name: "Prisma",
        color: "#2d3748",
        img: "/image.png",
      },
      {
        name: "Python",
        color: "#2d3748",
        img: "/python.svg",
      },
     
     
    ],
    github: "https://github.com/Manav2209/FlipFrame",
    demo: "",
  }
 
];

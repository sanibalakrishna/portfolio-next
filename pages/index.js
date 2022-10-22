import Head from "next/head";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Textmodel from "../components/Textmodel";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Education, Projects, Socials } from "../public/data";
import { MdCastForEducation } from "react-icons/md";
import Card from "../components/Card";
import avatar from "../public/assets/avatar.png";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 10000);
  }, []);

  const icons = [
    // eslint-disable-next-line react/jsx-key
    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    // eslint-disable-next-line react/jsx-key
    <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    // eslint-disable-next-line react/jsx-key
    <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />,
    // eslint-disable-next-line react/jsx-key
    <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />,
    // eslint-disable-next-line react/jsx-key
    <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />,
  ];
  return (
    <AnimatePresence initial={false}>
      <div className="w-screen h-screen flex bg-[#ebbbb1]">
        <nav className="w-2/4 h-14 z-20 left-1/4 fixed inset-x-0 flex justify-center items-center bg-[#F3558880] rounded-lg top-1">
          <div className="h-14 w-20 flex justify-center items-center">
            <a
              className="font-semibold rounded-lg text-slate-600  hover:text-white active:text-sm"
              href="#"
            >
              Home
            </a>
          </div>

          <div className="h-14 w-20 flex justify-center items-center">
            <a
              className="font-semibold rounded-lg text-slate-600  hover:text-white active:text-sm"
              href="#about"
            >
              About
            </a>
          </div>
          <div className="h-14 w-20 flex justify-center items-center">
            <a
              className="font-semibold rounded-lg text-slate-600  hover:text-white active:text-sm"
              href="#projects"
            >
              Projects
            </a>
          </div>
          <div className="h-14 w-20 flex justify-center items-center">
            <a
              className="font-semibold  rounded-lg text-slate-600  hover:text-white active:text-sm"
              href="#contacts"
            >
              Contact
            </a>
          </div>
        </nav>
        <div className="absolute z-10 top-[10%] left-[2%] h-1/2 w-1/2">
          <Textmodel />
        </div>
        <main className="absolute z-10  top-80 flex-col h-3/4 w-full overflow-sticky">
          <div className="text-5xl ml-[2%] font-Rampart w-96 h-48 text-slate-500 hover:text-blue-900">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I'm a Web Developer,",
                  "I'm a Game Developer,",
                  "I'm a Techonlogy Enthasiast,",
                ],
              }}
            />
          </div>
          <section id="about" className="ml-[2%]">
            <h1 className="text-semibold text-3xl font-Rampart text-slate-600">
              About
            </h1>

            <Image
              src={avatar}
              alt="avatar"
              className="rounded-lg border-4  border-[#a753ec6c] solid"
              height={200}
              width={200}
            />

            <p className="text-2xl text-[#1c41f6] w-96 font-Satisfy">
              I{"'"}m a Engineering Graduate in Electronics and built my skills
              more over in the field of Computer Science like{" "}
              <span className="text-[#f9552d]">Web Development</span> including
              HTML, CSS, JavaScript, Frameworks like React-JS, Next-JS, Node-JS,
              Express, Database like Mongodb etc... . I also found interest
              towards the{" "}
              <span className="text-[#fc38df]">Game Development</span> and found
              my way to build some of the fasinating adventure 3d games with the
              help of skills like Unity 3D,Blender,C# Scripts etc... I&aposm
              also fascinated about coding and programming more through out this
              journey I have learnt languages like C++,Java,Python etc...
            </p>
          </section>
          <h1
            className=" text-slate-600 font-Rampart text-3xl ml-[2%]"
            id="education"
          >
            Education
          </h1>
          <section className="w-3/4 ml-[2%] ">
            <VerticalTimeline>
              {Education &&
                Education.map((m) => (
                  <VerticalTimelineElement
                    key={m.id}
                    position="left"
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: `rgb(252, 165, 165)`,
                      borderRadius: "10px",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    date={m.data}
                    iconStyle={{
                      background: "rgb(125, 206, 19)",
                      color: "#fff",
                    }}
                    icon={<MdCastForEducation />}
                  >
                    <h1 className="vertical-timeline-element-title text-white font-bold text-xl">
                      {m.college}
                    </h1>
                    <h3 className="vertical-timeline-element-title text-violet-500 font-semibold text-lg">
                      {m.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {m.location}
                    </h4>
                    <p>{m.description}</p>
                  </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
          </section>

          <section className="flex flex-col ml-[2%] " id="projects">
            <h1 className="text-slate-600 font-Rampart text-3xl">Projects</h1>
            <div className="w-[45%]  grid grid-cols-2 gap-4">
              {Projects &&
                Projects.map((m) => (
                  <Card
                    key={m.id}
                    live={m.live}
                    title={m.title}
                    imgSrc={m.imgSrc}
                    techStack={m.techStack}
                    github={m.github}
                  />
                ))}
            </div>
          </section>
          <h1 className=" text-slate-600  font-Rampart text-3xl ml-[2%]">
            Follow me on
          </h1>
          <section className="h-32 ml-[2%]" id="contacts">
            <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
              {Socials &&
                Socials.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link}
                    key={n.id}
                    target="_blank"
                    className="w-full md:w-auto px-3 md:px-8 py-5 border bg-[#46f3465e] rounded-2xl hover:bg-[#5bf856] duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {icons[n.id - 1]}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>

        <div className="fixed  h-screen w-screen bg-[#ebbbb1]">
          <Spline scene="https://prod.spline.design/WKSrMjfKUPodFvFp/scene.splinecode" />
        </div>
        {!loading && (
          <div className="z-40 h-screen w-screen  bg-[#ebbbb1] flex flex-col items-center justify-center">
            <h1 className="text-center text-6xl text-violet-400 font-Rampart ml-10">
              Loading...
            </h1>
            <p className="text-red-500 font-Satisfy mt-10 text-xl">
              Note - Place the cursor on the right side and scroll to see the
              effect
            </p>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
}

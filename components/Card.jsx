import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import House from "../public/assets/House.png";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { MdTitle } from "react-icons/md";
function Card({ title, imgSrc, techStack, live, github }) {
  const [state, setState] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="h-48 w-72 bg-[#fffbfb2c] rounded-lg border border-black flex flex-col items-center hover:scale-105 hover:border hover:border-white">
        <h1 className="font-semibold text-white">{title}</h1>
        <div className="px-2">
          <Image
            src={imgSrc}
            alt="project-image"
            className="text-center rounded-lg"
            width={220}
            height={100}
          />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-black text-sm pt-2">{techStack}</p>
          <Link href={live} className="pt-2 pl-2 " target="_blank">
            <motion.div whileTap={{ scale: 0.5 }}>
              <BsBoxArrowUpRight className=" text-white" />
            </motion.div>
          </Link>
          <Link href={github} className="pt-2 pl-2" target="_blank">
            <motion.div whileTap={{ scale: 0.5 }}>
              <BsGithub
                className="text-textBase text-3xl cursor-pointer  text-white"
                style={{ fontSize: "20px" }}
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Card;

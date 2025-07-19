import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, Iam Venkatesh", "Frontend developer", "<LovesToCodeMore/>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center
  text-center overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]">
        <Image
          src="/images/img1.jpg"
          alt="Profile"
          fill
          priority
          className="rounded-full object-cover"
          sizes="(max-width: 768px) 100px, (max-width: 1024px) 150px, 200px"
        />
      </div>
      <div className="z-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold px-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#certifications">
            <button className="heroButton">Certifications</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

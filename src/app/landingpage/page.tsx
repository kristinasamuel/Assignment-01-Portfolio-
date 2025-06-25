"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
function MainPage() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen w-full">
          {/* Set Profile Image on the Left side */}
          <div className="flex justify-center md:w-1/2 mb-8 md:mb-0 ">
            <Image
              src="/images/profile.jpg" 
              height={300}
              width={300}
              alt="My image"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left md:w-1/2">
            {/* h1 introduction */}
            <h2 className="text-4xl font-bold">Hi, I'M KARISTINA</h2>
    
            <h6 className="text-3xl md:text-4xl mt-4 font-bold text-teal-500 uppercase">
              {/* Typewriter Effect */}
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer,",
                    "Web Designer,",
                    "UI/UX designer",
                    "Creative Coder,",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h6>
            <p className="flex-col text-lg md:text-2xl mt-4">
              I am a Front-End Developer with a passion for creating intuitive, dynamic user interfaces.
            </p>
    
            <div className="flex flex-row mt-5">
              {/* My LinkedIn Account */}
              <Link
                href="https://www.linkedin.com/in/kristina-samuel-21a6942ba"
                target="_blank"
                aria-label="Visit my LinkedIn"
              >
                <FaLinkedin className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110 hover:text-gray-700 rounded-xl" />
              </Link>
              {/* My GitHub Account */}
              <Link
                href="https://github.com/kristinasamuel"
                target="_blank"
                aria-label="Visit my GitHub"
              >
                <FaGithub className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110 hover:text-gray-700 rounded-xl" />
              </Link>
              {/* Email Account */}
              <Link href="mailto:karistina97@gmail.com" aria-label="Send me an email">
                <FaEnvelope className="mx-2 h-12 w-12 md:h-16 md:w-16 text-black transition-transform ease-in-out transform hover:scale-110 hover:text-gray-700 rounded-xl" />
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="mt-6">
              {/* Resume Page */}
              <ul className="flex flex-row">
                <li>
                  <Link
                    href="/resume"
                    className="p-2 h-16 w-16 uppercase font-bold bg-teal-400 hover:bg-teal-600 text-black rounded-xl"
                  >
                    resume
                  </Link>
                </li>
                {/* Contact Me page */}
                <li>
                  <Link
                    href="/contact"
                    className="p-2 uppercase font-bold bg-teal-400 hover:bg-teal-500 mx-2 text-black rounded-xl"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default MainPage
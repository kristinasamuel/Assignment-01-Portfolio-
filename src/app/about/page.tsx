// about page
"use client";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";

export default function AboutPage() {
  return (
    <div className="min-h-screen md:p-4 p-6 ">
      <h1 className="text-4xl font-bold text-center uppercase mt-5">About</h1>

      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4 mt-10 bg-white rounded-lg">
        {/* My Journey  */}
        <h1 className="text-4xl font-bold text-gray-600 mb-4">My Journey</h1>
        <p className="text-gray-700 text-lg mb-4">
          Hi, I'm Kristina! A passionate frontend developer. My programming
          journey began with GIAIC (Governor's Initiative of Artificial
          Intelligence and Computing). The goal of this program is to spark
          students' interest and teach them key skills in AI and computing. From
          the very start, I committed to completing every assignment on time and
          taking full advantage of the resources provided. I participated in the
          100 Days of Coding Challenge, which boosted my passion and improved my
          problem-solving skills. Now, I'm diving into the "30 Days of 30
          Projects" challenge, where I'm building unique applications, each
          offering a new opportunity to learn and grow.
        </p>
        <p className="text-gray-700 text-lg">
          Each project brings new lessons, and I'm thrilled by how much I've
          grown on this incredible journey. I believe in continuous learning and
          growing with every project I undertake.
        </p>
      </div>

      <div className="mt-5 text-center">
        <h1 className="text-2xl font-bold uppercase">Programming Languages</h1>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row p-10 justify-center mt-5 gap-4">
        {/* HTML icon */}
        <div className="flex flex-col items-center bg-white text-orange-700 text-center p-2 rounded-lg transition-transform ease-in-out transform hover:scale-110">
          <FaHtml5 className="h-12 w-12 sm:h-16 sm:w-16" />
          <span className="text-black uppercase">HTML5</span>
        </div>

        {/* Tailwind CSS icon */}
        <div className="flex flex-col items-center bg-white text-blue-700 text-center p-2 rounded-lg transition-transform ease-in-out transform hover:scale-110">
          <RiTailwindCssFill className="h-12 w-12 sm:h-16 sm:w-16" />
          <span className="text-black uppercase">Tailwind CSS</span>
        </div>

        {/* TypeScript icon */}
        <div className="flex flex-col items-center bg-white text-blue-700 text-center p-2 rounded-lg transition-transform ease-in-out transform hover:scale-110">
          <BiLogoTypescript className="h-14 w-14 sm:h-16 sm:w-16" />
          <span className="text-black uppercase">TypeScript</span>
        </div>

        {/* CSS3 icon */}
        <div className="flex flex-col items-center bg-white text-orange-400 text-center p-4 rounded-lg transition-transform ease-in-out transform hover:scale-110">
          <IoLogoCss3 className="h-12 w-12 sm:h-16 sm:w-16" />
          <span className="text-black uppercase">CSS3</span>
        </div>
      </div>
    </div>
  );
}

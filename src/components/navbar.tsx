//Navbar 
import Link from "next/link";
export default function Navbar(){
  return(
    
<div className="h-10 bg-neutral-700">  
  <nav className="flex items-center justify-between">
    <span className="text-3xl font-extrabold text-white uppercase hover:text-teal-500 mx-3">K</span>

    <ul className="flex-grow  flex justify-center items-center space-x-4 text-white">
      <li className="  hover:underline">
        <Link href={"/"}>Home</Link>
      </li>
      <li className=" hover:underline" >
        <Link href={"/about"}>About</Link>
      </li>
      <li className=" hover:underline">
        <Link href={"/projects"}>Project</Link>
      </li>
      <li className=" hover:underline ">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  </nav>
</div>

  )
}

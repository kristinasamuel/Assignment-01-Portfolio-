
"use client";

import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import HeroSection from "./heroSection/page";
import ProjectPage from "./projects/page";
export default function HomePage(){
    return (
       <div > 
        <HeroSection/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
       </div>
    )
}


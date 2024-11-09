"use client";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import MainPage from "./landingpage/page";
import ProjectPage from "./projects/page";
export default function HomePage(){
    return (
       <div > 
        <MainPage/>
        <AboutPage/>
        <ProjectPage/>
        <ContactPage/>
       </div>
    )
}


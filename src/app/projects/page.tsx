import Image from "next/image";
export default function ProjectPage() {
  return (
   <div className="flex flex-col items-center justify-center  ">
    {/* h1  Mainheading*/}
      <h1 className="text-4xl font-bold mt-5 uppercase mb-5">Latest Projects</h1>
   {/* I mention all my latest project which i have comleted  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-4  max-w-4xl">
        {/* Project 1  weather app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden items-center justify-center text-center
          transition-transform ease-in-out transform hover:scale-110">
          <Image
            src={"/images/weather.jpg"}
            width={200}
            height={200}
            alt="project1"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Weather Widgets App</h2>
            <p className="text-sm">
              Built with Next.js, Api ,Tailwind CSS, and ShadCN.
              Get real-time weather updates in style!.
            </p>
          </div>
        </div>

        {/* Project 2 Birthday Wish app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center 
        transition-transform ease-in-out transform hover:scale-110">
          <Image
            src={"/images/birthday2.png"}
            width={200}
            height={200}
            alt="project-2"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />{" "}
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">BirthDay Wish App</h2>
            <p className="text-sm">
            The Birthday Wish App is a delightful web application 
            designed to send birthday greetings in a stylish and fun way.
            </p>
          </div>
        </div>

        {/* Project 3 Word Counter app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center
          transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/counter1.png"}
            width={200}
            height={300}
            alt="project-3"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Word Counter App</h2>
            <p className="text-sm">
            A powerful tool built with Next.js, Tailwind CSS, and Shadcn, offering 
            real-time word and character counting. </p>
          </div>
        </div>
        {/* Project 4 Movie search app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center 
          transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/movie2.png"}
            width={200}
            height={100}
            alt="project-4"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Movie Search App</h2>
            <p className="text-sm">
            Built with Next.js and Tailwind CSS, this app allows users to search for
              any movie by name.</p>
          </div>
        </div>
         {/* Project 5 Recipe search app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center
           transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/recipesearch.jpg"}
            width={250}
            height={300}
            alt="project-5"
            className="mx-auto items-center justify-center bg-cover text-center mt-2 "
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Recipe Search App</h2>
            <p className="text-sm">
            A user-friendly Recipe Search app that lets you find recipes by name. Built with Next.js ,ShadCN and Tailwind CSS.            </p>
          </div>
        </div>
          {/* Project 6 Currency converter app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden  text-center transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/currencey.png"}
            width={200}
            height={200}
            alt="project-6"
            className="mx-auto items-center justify-center bg-cover text-center mt-2 "
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Currency Converter App</h2>
            <p className="text-sm ">
           Currency Converter app built with Next.js and ShadCN, providing real-time 
            conversion rates with an intuitive interface.   </p>
          </div>
        </div>
           {/* Project 7 Resume Builder app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center 
          transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/images.png"}
            width={250}
            height={300}
            alt="project-7"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Resume Builder App</h2>
            <p className="text-sm">
            Sir Ameen Alam announced a hackathon where we will create a
             Resume Builder app using TypeScript, HTML, and CSS. This project focuses 
             on building a user-friendly tool that allows users to input their details 
            and generate a professional resume with clean design and interactivity.</p>
          </div>
        </div>
             {/* Project 8 Movie search app*/}
        <div className="bg-white text-black rounded-lg overflow-hidden text-center 
        transition-transform ease-in-out transform hover:scale-110">
        <Image
            src={"/images/clock1.jpg"}
            width={200}
            height={200}
            alt="project-8"
            className="mx-auto items-center justify-center text-center mt-2 bg-cover"
          />
          <div className="p-4">
            <h2 className="text-2xl mb-2 font-bold">Digital Clock</h2>
            <p className="text-sm">
            A modern Digital Clock built with Next.js and ShadCN, 
            offering real-time updates and a sleek, responsive design for any
             device.</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}


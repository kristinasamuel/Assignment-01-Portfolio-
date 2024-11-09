"use client"
// My Resume
function ResumePage() {
    return (
    <div className="min-h-screen flex flex-col items-center p-10">
      {/* Profile Section*/}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2"> Kristina</h1>
          <p className="text-gray-600">• Web Developer,UI/UX Designer</p>
          <p className="text-gray-600"> • Languages: Urdu , English</p>
          <p className="text-gray-600">• Email: karistina97@gmail.com</p>
          <p className="text-gray-600">• Location: Karachi, Pakistan</p>
        </div>
      </section>

      {/* Education Section,  give specific color,size,font*/}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <p className="mb-2">
        • In 2017, I completed my matriculation from The Citizen Foundation School.
        </p>
        <p className="mb-2">
        • In 2020, I completed my intermediate from Madar-e-Millat Girls College.
        </p>
        <p>
        • Currently, I am learning Generative AI, Web 3.0 at the Governor House Sindh, Karachi.
        </p>
      </section>

      {/* Experience Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <p>
        • As a fresh developer, I have gained practical experience through personal projects
          and hands-on learning. I am proficient in HTML, CSS, and TypeScript, and I am 
          continuously improving my skills in Next.js and responsive web design.
        </p>
      </section>

      {/* Skills Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>HTML : 85%</li>
          <li>CSS : 70%</li>
          <li>Tailwind CSS : 75%</li>
          <li>TypeScript : 60%</li>
        </ul>
      </section>
    </div>
    
  )
}

export default ResumePage
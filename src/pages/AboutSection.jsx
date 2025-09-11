import { Link } from "react-router";

const AboutSection = () => {

  return (
    <div className="max-w-[1080px] mx-auto px-4 py-2 text-md leading-relaxed">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <div className="space-y-2 mb-2">
        <p>
          Hi, I’m <span className="font-semibold">Aman</span> — a self-taught developer, 
          problem-solver, and dreamer with an unshakable curiosity for technology and 
          a heart driven by purpose.
        </p>
        <p>
          With a master’s degree in Mathematics and practical experience in business operations, 
          I transitioned into tech to build tools that truly empower people — mentally, 
          emotionally, and professionally.
        </p>
        <p>
          Since <span className="font-semibold">January 2025</span>, I’ve been on a focused journey 
          in <span className="italic">Web Development</span> and <span className="italic">Cybersecurity</span>, 
          creating real-world applications that blend technical precision with human empathy. 
          From a journaling app that enhances self-awareness to a billing system that streamlines 
          business workflows — I build solutions that matter.
        </p>
        <p>
          My ultimate goal? To use code as a force for good — combining 
          <span className="font-semibold"> full-stack mastery </span> with 
          <span className="font-semibold"> cybersecurity expertise </span> 
          to create systems that are not just functional, but also secure, meaningful, and empowering.
        </p>
        <p>
          I believe in <span className="italic">building with soul</span>, 
          <span className="italic"> scaling with integrity</span>, 
          and never settling for “just enough.”
        </p>
      </div>
      <Link to= {"https://linkedin.com/in/aman-maikhuri-622582263"} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Connect Now
      </Link>
    </div>
  )
}

export default AboutSection

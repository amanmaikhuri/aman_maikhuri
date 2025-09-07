import { useState } from "react";
import image from "../assets/amanLogo.png";
import amazon from '../assets/amazon.png'
import expense from '../assets/expense.png'
import growthSnap from '../assets/growthSnap.png'
import recipe from '../assets/recipe.png'
import moodLogger from '../assets/moodLogger.png'
import { ArrowRight } from "lucide-react";

// Reusable Project Card
const ProjectCard = ({ title, img, stack, description, github, live }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="w-[320px] h-full px-3 py-4 border rounded-lg shadow-md 
      hover:shadow-2xl transition duration-300 flex flex-col border-t-4 
      border-[var(--success)] relative group overflow-hidden"
      onClick={() => setShowDetails(!showDetails)} // Mobile click toggle
    >
      {/* Project Title */}
      <h3 className="font-bold text-2xl pb-2">{title}</h3>

      {/* Image */}
      <div className="rounded-md flex-grow">
        <img
          src={img}
          alt={`${title} Preview`}
          loading="lazy"
          className={`rounded-lg object-cover w-full h-[200px] transition duration-500 ${
            showDetails ? "opacity-0" : "opacity-100"
          } group-hover:opacity-30`}
        />
        <ArrowRight size={28} className="md:hidden absolute bottom-5 right-6"/>
      </div>

      {/* Details Overlay */}
      <div
        className={`absolute left-0 right-0 bottom-0 bg-white/95 text-black p-4 rounded-t-lg 
        transform transition-all duration-500 ease-in-out 
        ${
          showDetails
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
        }`}
      >
        <p className="py-1 text-sm">
          <strong>Tech Stack: </strong>
          {stack}
        </p>
        <p className="py-1 text-sm">
          <strong>Description: </strong>
          {description}
        </p>
        <div className="py-2 flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 border rounded-md bg-[var(--success)] font-bold text-sm hover:bg-green-600 transition"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 border rounded-md bg-[var(--mindful)] font-bold text-sm hover:bg-purple-600 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: "Growth Snap",
      img: growthSnap ? growthSnap : image,
      stack: "React.js, Vite, Vercel, GitHub, Tailwind",
      description:
        "A productivity tracker app designed to help users visualize growth and maintain consistency.",
      github: "https://github.com/amanmaikhuri/GrowthSnap",
      live: "https://growth-snap.vercel.app/",
    },
    {
      title: "Mood Logger",
      img: moodLogger ? moodLogger : image,
      stack: "React.js, Vite, Vercel, GitHub, Tailwind",
      description:
        "A journaling app that allows users to log moods and track emotional well-being over time.",
      github: "https://github.com/amanmaikhuri/moodTracker",
      live: "https://mood-tracker-xi.vercel.app/",
    },
    {
      title: "Recipe Web",
      img: recipe ? recipe : image,
      stack: "React.js, Vite, Vercel, GitHub, Tailwind",
      description:
        "A recipe finder web app where users can search, filter, and save favorite recipes.",
      github: "https://github.com/amanmaikhuri/find-recipe",
      live: "https://amanmaikhuri.github.io/find-recipe/",
    },
    {
      title: "Amazon Clone",
      img: amazon ? amazon : image,
      stack: "React.js, Vite, Vercel, GitHub, Tailwind",
      description:
        "An Amazon-inspired e-commerce UI clone with product listing, cart, and checkout pages.",
      github: "https://github.com/amanmaikhuri/amazon_clone",
      live: "https://amazon-clone-h37h.vercel.app/",
    },
    {
      title: "Expense Tracker",
      img: expense ? expense : image,
      stack: "React.js, Vite, Vercel, GitHub, Tailwind",
      description:
        "A finance management tool to track daily expenses and visualize spending trends.",
      github: "https://github.com/amanmaikhuri/expenseTracker",
      live: "https://amanmaikhuri.github.io/expenseTracker/",
    },
  ];

  return (
    <section className="w-full max-w-[1080px] mx-auto px-6 relative overflow-hidden">
      <h2 className="font-extrabold px-4 text-2xl text-center">
        Projects
      </h2>

      {/* Projects container */}
      <div className="flex flex-wrap justify-center gap-8 pt-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Project;

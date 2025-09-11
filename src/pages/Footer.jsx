import { FaCopyright } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import amanJpg from "../assets/amanLogo.png";
import { Link, Navigate } from "react-router";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-2">
      {/* Back to top */}
      <div
        onClick={scrollToTop}
        className="py-4 px-4 cursor-pointer text-center text-green-400 font-bold flex items-center justify-center gap-2 hover:text-green-300 transition-colors duration-300 border-b border-gray-700"
      >
        Back to top <FaArrowAltCircleUp className="animate-bounce" />
      </div>

      {/* Footer section */}
      <div className="w-full max-w-[1080px] flex flex-col md:flex-row justify-between items-center gap-6 mx-auto px-6 py-10">
        {/* Logo */}
        <div className="h-[70px] w-[200px] relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={amanJpg}
            alt="Aman Maikhuree Logo"
            loading="lazy"
            className="h-[200px] w-full absolute -top-12 object-cover"
          />
        </div>

        {/* About text */}
        <p className="max-w-[400px] text-sm md:text-base leading-relaxed text-center md:text-left">
          A self-taught developer, problem-solver, and dreamer with a deep
          curiosity for technology and a heart rooted in purpose.
        </p>

        {/* Quick Links (optional add-on) */}
        <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <li className="hover:text-green-400 cursor-pointer transition-colors">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-colors">
            <Link to={"/projects"}>Projects</Link> 
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-colors">
            <Link to={"/contact"}>Contact</Link> 
          </li>
          <li className="hover:text-green-400 cursor-pointer transition-colors">
            <Link to={"/about"}>About</Link> 
          </li>
        </ul>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700">
        <p className="text-gray-400 px-6 py-4 text-center text-sm flex justify-center items-center gap-2">
          <FaCopyright size={18} />{" "}
          <span>
            All rights reserved by Aman Maikhuree © 2025 – Inspired by popular
            websites
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

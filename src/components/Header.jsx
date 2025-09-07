import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMode = () => {
    const body = document.querySelector("#root");
    if (body.classList.contains("light-mode")) {
      body.classList.replace("light-mode", "dark-mode");
      setIsDark(true);
    } else {
      body.classList.replace("dark-mode", "light-mode");
      setIsDark(false);
    }
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-5 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo + mobile toggle */}
        <div className="flex items-center gap-3">
          <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
            <FaBars />
          </button>
          <Link to="/" className="text-2xl md:text-3xl font-bold text-green-500">
            amanzon
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navigations flex items-center gap-8 font-medium">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-green-500 font-semibold" : "hover:text-green-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Socials + Mode Toggle */}
        <ul className="flex items-center gap-5 text-lg">
          <li><a href="https://facebook.com/amanmaikhuriofficial"><FaFacebookF /></a></li>
          <li><a href="https://instagram.com/the_aman_effect/"><FaInstagram /></a></li>
          <li><a href="https://github.com/amanmaikhuri"><FaGithub /></a></li>
          <li><a href="https://linkedin.com/in/aman-maikhuri-622582263/"><FaLinkedinIn /></a></li>
          <li onClick={toggleMode} className="cursor-pointer">
            {isDark ? <FaSun /> : <FaMoon />}
          </li>
        </ul>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
    </header>
  );
};

export default Header;

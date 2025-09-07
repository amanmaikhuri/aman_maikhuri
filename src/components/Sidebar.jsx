import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router";

const Sidebar = ({ isOpen, setIsOpen, links }) => {
  return (
    <div
      className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-black/40"
      ></div>

      {/* Sidebar */}
      <aside className="relative z-50 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-xl flex flex-col gap-6 text-lg font-medium">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>

        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `mt-6 transition-colors ${
                isActive ? "text-green-500 font-semibold" : "hover:text-green-500"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </aside>
    </div>
  );
};

export default Sidebar;

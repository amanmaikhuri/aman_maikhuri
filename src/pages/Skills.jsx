import {
  Code2,
  Layout,
  Palette,
  Laptop,
  Server,
  Database,
  Cloud,
  GitBranch,
  Network,
  FileJson,
  Bot,
  Brain,
  Briefcase,
  MessageSquare,
} from "lucide-react";

const Skills = () => {
  return (
    <div className="max-w-[1080px] mx-auto px-4 py-6 text-md leading-relaxed">
      <h1 className="text-2xl font-bold mb-6 text-center">Skills</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {/* Frontend Card */}
        <div className="w-full md:w-[30%] shadow-md rounded-lg p-5 border hover:shadow-lg transition border-t-5 border-[var(--primary)]">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Layout className="w-5 h-5 text-blue-600" /> Frontend
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-orange-500" /> HTML5, CSS3, JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <Laptop className="w-4 h-4 text-blue-500" /> React.js (Vite, Hooks, State Management)
            </li>
            <li className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-pink-500" /> UI/UX Design Principles
            </li>
            <li className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-teal-500" /> Tailwind CSS, Responsive Design
            </li>
            <li className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-500" /> DOM Manipulation & LocalStorage
            </li>
          </ul>
        </div>

        {/* Backend & Tools Card */}
        <div className="w-full md:w-[30%] shadow-md rounded-lg p-5 border hover:shadow-lg transition border-t-5 border-[var(--primary)]">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Server className="w-5 h-5 text-green-600" /> Backend & Tools
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Server className="w-4 h-4 text-green-600" /> Node.js (Basics, in progress)
            </li>
            <li className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-yellow-500" /> Firebase (Auth, Firestore, Hosting)
            </li>
            <li className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-gray-700" /> Git & GitHub (Version Control, Deployment)
            </li>
            <li className="flex items-center gap-2">
              <Network className="w-4 h-4 text-blue-600" /> REST API Integration
            </li>
            <li className="flex items-center gap-2">
              <FileJson className="w-4 h-4 text-orange-600" /> JSON Data Handling
            </li>
          </ul>
        </div>

        {/* Other Strengths Card */}
        <div className="w-full md:w-[30%] shadow-md rounded-lg p-5 border hover:shadow-lg transition border-t-5 border-[var(--primary)]">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-600" /> Other Strengths
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-indigo-600" /> Prompt Engineering & AI Integration
            </li>
            <li className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-600" /> Problem-Solving & Logical Thinking
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-yellow-700" /> Business Acumen (family business experience)
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" /> Effective Communication & Teaching
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import { BrowserRouter as Router, Routes, Route } from "react-router";

import AboutSection from "./pages/AboutSection"
import Blogs from "./pages/Blogs"
import Certifications from "./pages/Certifications"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"
import Homepage from "./pages/Homepage"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";


function App() {

  return (
    <Router>
      <Header />
      <main className="pt-2 md:pt-6"> {/* padding so content doesn’t hide under header */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

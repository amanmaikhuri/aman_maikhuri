import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// images (keep your existing imports — paths should be correct)
import infoysSpringboard from "../images/overviewOfInfosysSpringboard.jpg";
import activeListening from "../images/activeListeningSkills.jpg";
import bodyLanguage from "../images/understandingBodyLanguage.jpg";
import machineLearning from "../images/introductionToMachineLearningh.jpg";
import python from "../images/basicsOfPython.jpg";
import creativeConfidence from "../images/buildingCreativeConfidence.jpg";
import agileMindset from "../images/buildingAgileMindset.jpg";
import businessCommunication from "../images/basicsOfBusinessCommunication.jpg";
import businessEnglish from "../images/businessEnglish.jpg";
import businessWriting from "../images/businessWriting.jpg";
import communication from "../images/communicatingToSucceed.jpg";
import presentations from "../images/highImpactPresentations.jpg";
import emailWriting from "../images/emailWritingSkills.jpg";
import interactiveSkills from "../images/interactiveSkiils.jpg";
import speakUp from "../images/speakUp.jpg";
import timeManagement from "../images/timeManagement.jpg";

const Certifications = () => {
  const certifications = [
    timeManagement,
    speakUp,
    interactiveSkills,
    emailWriting,
    presentations,
    communication,
    businessWriting,
    businessEnglish,
    businessCommunication,
    agileMindset,
    creativeConfidence,
    python,
    machineLearning,
    bodyLanguage,
    activeListening,
    infoysSpringboard,
  ];

  const [x, setX] = useState(0); // translateX in px
  const [bounds, setBounds] = useState({ minX: 0, maxX: 0 });
  const containerRef = useRef(null); // visible viewport
  const contentRef = useRef(null); // flex content (all cards)
  const cardWidthRef = useRef(350); // fallback step

  // clamp helper
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  // compute widths & bounds (runs on mount and resize)
  useEffect(() => {
    const updateBounds = () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const containerWidth = container.clientWidth;
      const contentWidth = content.scrollWidth;

      // compute gap from CSS (flex gap)
      const computed = getComputedStyle(content);
      const gapPx = parseFloat(computed.gap) || 16;

      // derive card width from first child if available
      const firstChild = content.children[0];
      const cardW = firstChild ? firstChild.offsetWidth + gapPx : cardWidthRef.current;
      cardWidthRef.current = cardW;

      const minX = Math.min(0, containerWidth - contentWidth); // negative or 0
      const maxX = 0;

      // update bounds and clamp current x
      setBounds({ minX, maxX });
      setX((prev) => clamp(prev, minX, maxX));
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, [certifications.length]);

  const handleNext = () => {
    // step by one card
    const step = Math.round(cardWidthRef.current);
    setX((prev) => clamp(prev - step, bounds.minX, bounds.maxX));
  };

  const handlePrev = () => {
    const step = Math.round(cardWidthRef.current);
    setX((prev) => clamp(prev + step, bounds.minX, bounds.maxX));
  };

  const atLeftEdge = Math.abs(x) < 1; // near zero
  const atRightEdge = Math.abs(x - bounds.minX) < 1; // near minX

  return (
    <div className="relative h-[20rem] md:h-[27rem] w-full overflow-hidden max-w-[1080px] mx-auto px-2">
      <h3 className="py-2 font-extrabold text-2xl">Certifications</h3>

      {/* Left arrow */}
      <button
        onClick={handlePrev}
        aria-label="Previous"
        disabled={atLeftEdge}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 ${
          atLeftEdge ? "opacity-40 pointer-events-none" : "opacity-100"
        }`}
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Right arrow */}
      <button
        onClick={handleNext}
        aria-label="Next"
        disabled={atRightEdge}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 ${
          atRightEdge ? "opacity-40 pointer-events-none" : "opacity-100"
        }`}
      >
        <ChevronRight className="text-white" />
      </button>

      {/* viewport wrapper that we measure */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden relative mt-4"
        aria-hidden={false}
      >
        {/* motion content (we measure this too) */}
        <motion.div
          ref={contentRef}
          className="flex gap-4 items-start absolute left-0 top-0 pt-2"
          animate={{ x }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          style={{ willChange: "transform" }}
        >
          {certifications.map((cert, idx) => (
            <img
              key={idx}
              src={cert}
              alt={`Certification ${idx + 1}`}
              loading="lazy"
              // keep consistent width so cardWidth detection is stable
              // style={{ width: 350 }}
              className="h-60 md:h-90 w-[350px] md:w-130 rounded-lg flex-shrink-0 border-t-4 border-[var(--mindful)] object-cover"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;

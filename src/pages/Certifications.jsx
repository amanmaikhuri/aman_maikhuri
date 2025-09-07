import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // arrow icons
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

  const [x, setX] = useState(0); // track scroll position
  const cardWidth = 450; // adjust based on your img width + gap

  const handleNext = () => {
    if (Math.abs(x) < (certifications.length - 2) * cardWidth) {
      setX((prev) => prev - cardWidth);
    }
  };

  const handlePrev = () => {
    if (x < 0) {
      setX((prev) => prev + cardWidth);
    }
  };

  return (
    <div className="relative h-[20rem] md:h-[27rem] w-full overflow-hidden max-w-[1080px] mx-auto">
      <h3 className="px-2 py-2 font-extrabold text-2xl">
        Certifications
      </h3>

      {/* Arrow Left */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Arrow Right */}
      <button
        onClick={handleNext}
        className="absolute right-13 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 p-2 rounded-full"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Motion container */}
      <motion.div
        className="w-[83%] flex gap-4 absolute top-12 mt-4"
        animate={{ x }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        {certifications.map((cert, idx) => (
          <img
            key={idx}
            src={cert}
            alt={`Certification ${idx}`}
            loading="lazy"
            className="h-60 w-90 md:w-120 md:h-81 rounded-lg flex-shrink-0 border-t-5 border-[var(--mindful)]"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;

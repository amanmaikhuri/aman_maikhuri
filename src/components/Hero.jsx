import { useEffect, useMemo, useState } from "react";
import img from "../assets/amanLogo.png";
import { useNavigate } from "react-router";



const Hero = () => {
  const navigate = useNavigate();

  //function to handle download cv
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1JJvNurhSzd8fxYfW6pFjp7DNK5sRR_Bn/view?usp=drivesdk'; // Replace with the path to your PDF file
    link.download = 'Aman_Maikhuree_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const words = useMemo (() =>  ["code", "reflect", "transfer"], []);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (charIndex < currentWord.length) {
      // type one character
      const timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // wait, then move to next word
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words]);

  return (
    <div className="w-full h-full">
      <div className="max-w-[1080px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center p-4 md:p-8 bg-[var(--bg)]">
        {/* left section  */}
        <div className="py-4">
          <div className="flex items-center gap-2 text-2xl md:text-4xl font-bold">
            <h1 className="text-[var(--success)]">Aman Maikhuree</h1>
            <span className="text-[var(--mindful)] font-mono">{text}|</span>
          </div>
          <div className="">
            <p className="text-sm md:text-lg font-serif text-[var(--primary)] font-semibold pt-1">Aspiring Full Stack Developer</p>
            <p className="text-sm md:text-lg italic">Building healing digital experience with Code, Heart, Purpose.</p>
            <div className="flex gap-1 py-6">
              <button onClick={handleDownload}
            className="px-4 py-2 bg-[var(--success)] text-white rounded hover:bg-green-600 transition duration-300 w-fit">
              Download CV
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300 w-fit" onClick={() => {navigate("/projects")}}>
              Explore My Portfolio
            </button>
            </div>
            
          </div>
        </div>

        {/* right section */}
        <div className="flex justify-center items-center bg-gradient-to-l from-purple-600 to-blue-600 p-2 rounded-full shadow-lg md:shadow-xl">
          <img src={img} alt="Hero Image" className="w-[200px] h-[200px] rounded-full md:h-[25rem] md:w-[25rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

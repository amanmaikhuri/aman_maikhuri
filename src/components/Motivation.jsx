import { useEffect, useState } from "react";

const Motivation = () => {

  const [message, setMessage] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    try{
      fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        setMessage(data.quotes[randomIndex].quote);
        setAuthor(data.quotes[randomIndex].author);
      });
    }catch(error){
      console.error("Error fetching motivation message:", error);
    }
  }, []);
  return (
    <div className="px-4 bg-[var(--success)]-100 border-l-4 border-yellow-500 text-yellow-700">
      {message && <p className="motivation-message flex justify-center font-mono">{message} <br className="md:hidden"/>- {author}</p>}
    </div>
  )
}
export default Motivation
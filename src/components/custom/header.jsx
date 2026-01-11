import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const taglineWords = [
  "15 Questions · 30 Minutes",
  "Think Fast. Answer Smart.",
  "Measure What You Know.",
];
const Header = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const navigate=useNavigate()
  useEffect(() => {
    const timerId = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglineWords.length);
    }, 3000);

    return () => clearInterval(timerId);
  }, []);



  return (
    <header className="min-h-12 fixed top-0 backdrop-blur-sm bg-black/15 container mx-auto z-40 py-2 flex justify-between items-center px-10 shadow-sm border-b-2">
      <h1 onClick={()=>navigate('/')} className="text-xl sm:text-[22px] lg:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground from-60% to-[#999] cursor-pointer">Quizio</h1>
      <div className="relative w-55 h-5 overflow-hidden text-right">
        {taglineWords.map((tagline, index) => {
          return (
            <span
              key={tagline}
              className={` absolute right-0 top-0 w-full text-sm text-muted-foreground italic   transition-opacity duration-500  
              ${taglineIndex === index ? "opacity-100 " : "opacity-0 "}
            `}
            >
              {`— ${tagline}`}
            </span>
          );
        })}
      </div>
    </header>
  );
};

export default Header;

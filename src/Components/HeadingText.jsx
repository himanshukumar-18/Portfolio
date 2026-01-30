import { useEffect, useState } from "react";

const TypingText = () => {
  const text = "Full Stack Developer";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="uppercase tracking-widest text-white text-sm sm:text-[0.95rem]">
      {displayed}
      <span className="border-r-2 border-[#f9004d] animate-pulse ml-[2px]"></span>
    </span>
  );
};

export default TypingText;

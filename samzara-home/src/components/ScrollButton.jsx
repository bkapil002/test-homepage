import { useCallback, useEffect, useState } from "react";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true);

  // Scroll down function
  const scrollWin = useCallback(() => {
    window.scrollBy({ top: 600, behavior: "smooth" });
  }, []);

  // Detect when scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Check if near the bottom (allowing small offset)
      if (scrollTop + windowHeight >= docHeight - 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null; // hide when at bottom

  return (
    <div
      className="scroll-btn fixed bottom-6 right-6 cursor-pointer"
      onClick={scrollWin}
    >
      <svg
        className="arrows w-8 h-8"
        viewBox="0 0 60 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  );
}

export default ScrollButton;

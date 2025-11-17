import { useEffect, useState, useRef } from "react";
import logo from "../Image/LOGO.png";
import { LuLogIn } from "react-icons/lu";

const Navebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top
      if (currentScrollY === 0) {
        setIsVisible(true);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        return;
      }

      // Show while scrolling
      setIsVisible(true);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Hide when scroll stops
      scrollTimeout.current = setTimeout(() => {
        if (window.scrollY > 0) {
          setIsVisible(false);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`shadow-lg bg-white fixed top-0 left-0 w-full z-50
      transition-all duration-500 ease-[cubic-bezier(0.4,0.0,0.2,1)]
      ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
    >
      <div className="flex items-center justify-between py-4 px-4 sm:px-8 md:px-19 lg:px-16">
        <a href="/" className="flex w-[120px] md:w-[153px]">
          <img src={logo} alt="Logo" className="w-full" fetchpriority="high" />
        </a>

        <div className="flex items-center space-x-6">
          <div className="flex justify-center items-center gap-3 font-medium">
            <a
              href="https://community.samzara.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666767] text-[13px] md:text-[18px]"
            >
              Sign Up
            </a>

            <a
              href="https://community.samzara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center bg-[#2a2a72] font-light text-white text-[13px] md:text-[18px] px-6 py-1.5 cursor-pointer rounded-full transition-all duration-300 w-[110px] h-[36px] overflow-hidden whitespace-nowrap"
            >
              <span className="group-hover:opacity-0 transition-opacity duration-200">
                Sign In
              </span>

              <LuLogIn className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;

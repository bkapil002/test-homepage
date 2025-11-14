import logo from "../Image/LOGO.png";
import { LuLogIn } from "react-icons/lu";

const Navebar = () => {
  return (
    <nav className="shadow-lg bg-white">
      <div className="flex items-center justify-between py-4 px-4 sm:px-8 md:px-19 lg:px-16">
        {/* Logo */}
        <a href="/" className="flex w-[120px] md:w-[153px]">
          <img src={logo} alt="Logo" className="w-full" fetchpriority="high" />
        </a>

        {/* Hamburger (mobile) */}

        {/* Links (desktop) */}
        <div className=" flex items-center space-x-6">
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
              {/* Text visible normally, hidden on hover */}
              <span className="group-hover:opacity-0 transition-opacity duration-200">
                Sign In
              </span>

              {/* Icon hidden normally, visible on hover */}
              <LuLogIn className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;

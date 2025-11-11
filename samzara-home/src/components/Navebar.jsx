
import logo from "../Image/LOGO.png";

const Navebar = () => {

  return (
    <nav className="shadow-lg bg-white">
      <div className="flex items-center justify-between py-4 px-4 sm:px-8 md:px-19 lg:px-16">
        {/* Logo */}
        <a href="/" className="flex w-[120px] md:w-[153px]">
          <img src={logo} alt="Logo" className="w-full" fetchpriority="high"/>
        </a>

        {/* Hamburger (mobile) */}
        

        {/* Links (desktop) */}
        <div className=" flex items-center space-x-6">
          <div className="flex justify-center items-center gap-3 font-medium">
            <a
              href="https://community.samzara.in/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666767] text-[10px] md:text-[13px]"
            >
              Sign Up
            </a>
            <a
              href="https://community.samzara.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-900 text-white text-[10px] md:text-[13px]  px-[16px] py-1 cursor-pointer rounded-full"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
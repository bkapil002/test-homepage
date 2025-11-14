import { FaFacebookF, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import left from "../Image/left.png";
import glob from "../Image/glob2.png";
export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] border-t-gray-200 border-t-[1px] justify-center flex pt-15  font-sans pb-4 py-6 sm:py-10   px-4 sm:px-8 md:px-19 lg:px-16 ">
      <div className="w-285">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#e7e7e7] pb-4 gap-4">
        <div className="w-full md:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-[#1D293F]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
              </svg>
              <span className="font-semibold text-base sm:text-lg text-[#1D293F]">
                QUICK LINKS
              </span>
              <span className="text-[#626C8B] text-sm">
                Explore more categories
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mt-2 ml-6 text-sm text-[#546179] font-medium">
            <a
              href="https://findrehabcentres.com/find-a-rehab-centre-near-you"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Find Centres
            </a>
            <a
              href="https://findrehabcentres.com/events"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Events
            </a>
            <a
              href="https://findrehabcentres.com/addiction-related-meetings-near-you"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Nearby Meetings
            </a>
            <a
              href="https://findrehabcentres.com/treatment/levels-of-care/online-health-support-program"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Online Therapy
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row font-medium items-start sm:items-center gap-2 text-[#040406] text-sm sm:text-base">
          <a
            href="mailto:info@findrehabcentres.com?subject=Inquiry&body=Hello%20there"
            className="text-[#1D293F] underline"
          >
            info@findrehabcentres.com
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 sm:mt-8">
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Left Side */}
          <div className="w-full lg:w-auto mb-6 lg:mb-0">
            <div className="mb-4">
              <div className="text-[#626C8B]  text-sm sm:text-[14px]">
                Visit SamZara
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <div className="text-xl sm:text-2xl md:text-[30px] font-semibold text-[#1D293F] leading-tight mt-2 mb-2">
                  With You on <br /> Your Road to Recovery
                </div>
                <a
                  href="https://samzara.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2A2A72] hover:bg-[#149a49] cursor-pointer flex justify-center items-center text-[15px] -mt-1 sm:mt-10 text-white rounded-md h-10 px-9 font-medium shadow transition w-full sm:w-auto"
                >
                  Explore
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-end w-full lg:w-auto">
            <div className="flex items-center mb-4">
              <div className="bg-[#2C2D5B] w-[50px] h-[50px] rounded-full flex items-center justify-center mr-4">
                <img
                  src={glob}
                  alt="Globe Icon"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <a
                  href="https://findrehabcentres.com/contact-find-rehab-centres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D293F] font-bold flex text-sm sm:text-[15px] items-center cursor-pointer gap-2"
                >
                  <p> Reach Us</p>{" "}
                  <img src={left} alt="left" className="w-7 h-3" loading="lazy" />
                </a>
                <div className="font-bold text-[#546179] text-xs sm:text-base">
                  We're there for you.
                </div>
                <div className="mt-2"></div>
              </div>
            </div>
            <div className="flex items-center md:justify-end justify-start gap-4 ">
              <a
                href="https://www.facebook.com/findrehabcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A2A72] hover:scale-110 transition-transform"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="https://www.instagram.com/findrehabcentre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A2A72] hover:scale-110 transition-transform"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/find-rehab-centre"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A2A72] hover:scale-110 transition-transform"
              >
                <FaLinkedinIn  size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e7e7e7] mt-2 mb-2"></div>

        <div className="mt-3">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <div className="text-[#626C8B] flex justify-start  text-sm sm:text-[14px]">
                Do you have a rehab centre?
              </div>
              <ul className="space-y-2 flex-col font-semibold text-[#1D293F] text-sm sm:text-base">
                <a
                  href="https://findrehabcentres.com/list-on-best-directory-of-rehab-centres-in-india"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer"
                >
                  List your Rehab Centre
                </a>
                <br />
                <a
                  href="https://findrehabcentres.com/advertise-with-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer"
                >
                  Advertise with us
                </a>
                <br />
                <a
                  href="https://findrehabcentres.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer"
                >
                  About FRC
                </a>
              </ul>
            </div>

            <div className="w-full sm:w-auto mt-0 sm:-mt-4.5">
              <div className="text-[#626C8B] flex justify-start sm:justify-end text-sm sm:text-[14px]">
                Get In Touch
              </div>
              <div className="flex items-center justify-start sm:justify-end space-x-2 mt-1 ">
                <a
                  href="https://findrehabcentres.com/contact-find-rehab-centres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold cursor-pointer text-[#1D293F] text-sm sm:text-base"
                >
                  Let’s Talk
                </a>
              </div>
              <div className="flex justify-start  sm:justify-end items-center ">
                <a
                  href="https://findrehabcentres.com/work-with-find-rehab-centres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold cursor-pointer text-[#1D293F] text-sm sm:text-base"
                >
                  Work with us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 border-t border-[#e7e7e7] pt-4 text-xs text-[#626C8B]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div className="flex flex-col text-[#1D293F] sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 mb-2 md:mb-0">
            <a href="disclaimer" className="hover:underline">
              Disclaimer
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="text-left text-[#1D293F] md:text-right">
            2024 ©
            <a href="#" className=" font-bold underline cursor-pointer">
              SamZara India Pvt Ltd.
            </a>{" "}
            All rights reserved.
          </div>
        </div>
      </div>

      </div>
    </footer>
  );
}

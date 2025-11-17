import React, { useEffect } from "react";
import deaddiction from "../Image/de-addiction.jpg";
import ThreeDSlider from "./ThreeDSlider";
import JoinMember from "./JoinMember";
import video from "../Image/video.mp4";
import videos from "../Image/docter.mp4";

// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";
import BlogSlider from "./BlogSlider";
import SEO from "../componentsecond/SEO";
import RehabGrid from "./RehabGrid";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <SEO title="Samzara" description="Samzara" />
      {/* Hero Section with Video */}
      <div
        className="w-full shadow-xl/20   overflow-hidden "
        data-aos="fade-in"
      >
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full  h-[90vh]  rounded-b-[3px] md:h-auto lg:h-auto object-cover"
          fetchpriority="high"
          preload="metadata"
        />
      </div>

      {/* De-Addiction Section */}
      <div className=" flex justify-center py-15 md:py-29 px-4 sm:px-8 md:px-19 lg:px-16">
        <div className=" w-285">
          {/* Heading */}
          <h1
            className="text-2xl sm:text-4xl md:text-[50px] text-center md:text-right text-[#052488] mb-6"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            De-Addiction Anonymous
          </h1>

          <div className="mx-auto flex flex-col md:flex-row items-center gap-6">
            {/* Left Side - Image */}
            <div
              className="flex-1 w-full"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <img
                src={deaddiction}
                alt="De-addiction group"
                className="max-w-full h-auto rounded-md"
                loading="lazy"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col w-full" data-aos="fade-up">
              <p className="text-[#3C3C3C] text-center md:text-right mb-6 text-sm sm:text-base">
                <b>
                  Samzara is a social network with a purpose. Built for people
                  who believe in connection, compassion, and change.
                </b>{" "}
                <br />A safe and inclusive space to share your journey, exchange
                hope stories, and find encouragement. Find inspiration from
                others walking similar paths. Join groups, meet people online,
                even anonymously. Take part in conversations that inspire growth
                and positivity. With tools, resources, and a supportive
                community by your side, Samzara helps you connect, heal, and
                make a difference together.
              </p>

              {/* Button aligned right */}
              <div
                className="flex justify-center md:justify-end"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
              >
                <a
                  href="https://community.samzara.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="bg-[#2A2A72] hover:bg-[#149a49] flex justify-center items-center cursor-pointer text-[14px] text-white px-5 py-2 rounded-md w-full sm:w-auto transition"
                >
                  Join Online Meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className=" flex justify-center py-0 md:py-5 px-4 sm:px-8 md:px-19 lg:px-16">
        <div
          className="w-285"
        >
          {/* Heading */}
          <h1
            className="text-2xl sm:text-4xl md:text-[50px] text-center md:text-left text-[#052488] mb-6"
              data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
          >
            Explore the Docter
          </h1>

          {/* Flex container for image + text */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div
              className="flex justify-center lg:ml-30 ml-0 md:ml-0 w-full order-1 md:order-2"
              data-aos="fade-up"
            >
              <video
                src={videos}
                autoPlay
                loop
                muted
                playsInline
                alt="doctor illustration"
                className="max-w-full h-auto lg:h-[380px] rounded-md"
                loading="lazy"
              />
            </div>

            {/* Text block */}
            <div
              className="flex flex-col w-full order-2 md:order-1"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <h4  className="font-semibold text-[#3C3C3C] text-[18px] mb-2 text-center md:text-left">
                Professional Support That Also Feels Personal.
              </h4>
              <p className="text-[#3C3C3C] mb-6 text-center md:text-left text-sm sm:text-base">
                Samzara connects you with{" "}
                <b> clinical experts and qualified de-addiction doctors.</b>{" "}
                They understand what real recovery takes. Discover practical
                strategies that help you take control. Whether through group
                sessions or one-on-one guidance, professionals at SamZara are
                here to listen. The support that enables you to take confident
                steps toward a healthier, happier life. All in a safe and
                confidential space.
              </p>

              <p className="text-[#3C3C3C] mb-6 text-center md:text-left text-sm sm:text-base">
                Real people. Real support. An online space built on hope, trust,
                and empathy.
              </p>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="https://findrehabcentres.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="bg-[#2A2A72] hover:bg-[#149a49] flex justify-center items-center cursor-pointer text-[14px] text-white px-6 py-2 rounded-md w-full sm:w-auto transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Components */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <ThreeDSlider />
      </div>
      {/* <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <TopRehabs />
      </div> */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <RehabGrid />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <JoinMember />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <BlogSlider />
      </div>
    </div>
  );
};

export default Home;

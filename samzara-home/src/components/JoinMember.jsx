import React from "react";
import {  ArrowRight } from "lucide-react";
const JoinMember = () => {
  return (
    <div className="mb-12 sm:mb-15 mt-14 flex justify-center    px-4 sm:px-8 md:px-19 lg:px-16">
      <div className="w-285">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-center text-white  shadow-2xl">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold leading-snug">
          Join our <span className="font-bold text-white">0</span> Members
          Sharing Strength and Hope
        </h2>

        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-100">
          Connect with a global community in their recovery journey. Available
          24/7, 365 days a year. Attend online meetings, share your experiences,
          find support, encouragement, and inspiration whenever you need.
        </p>

        <a
          href="https://community.samzara.in/register"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 mt-6 bg-white text-green-700 px-8 py-3  rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
        >
          Sign Up Today
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      </div>
    </div>
  );
};

export default JoinMember;

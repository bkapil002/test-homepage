import React, { useState } from "react";
import { cities, rehabs } from "./RehabsData";
const RehabGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredRehabs.length - 6 : prev - 6
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= filteredRehabs.length - 6 ? 0 : prev + 6
    );
  };


  // Filter rehabs based on selected city
  const filteredRehabs =
    selectedCity === "All"
      ? rehabs
      : rehabs.filter((rehab) => rehab.location === selectedCity);

  const displayedRehabs = filteredRehabs.slice(currentIndex, currentIndex + 6);

  return (
    <div className="flex justify-center mt-12 p-4 md:p-6  ">
      <div className="w-285 max-w-7xl">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
          <div className="w-full md:w-auto">
            <h1 className="text-2xl text-center sm:text-4xl md:text-[50px] md:text-left text-[#052488] mb-3">
            Top Rehabs near You
          </h1>
            <p className="text-[#3C3C3C] text-center md:text-left text-sm sm:text-base">
              Most Brilliant reasons SamZara should be your one-stop-shop!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Custom Dropdown */}
            <div className="relative w-full sm:w-44">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between border border-[#2A2A72] rounded-full py-2 px-4 text-[#2A2A72] font-medium outline-1 outline-gray-300 focus:outline-2 focus:outline-[#2A2A72] transition-all"
              >
                <p className="line-clamp-1">{selectedCity}</p>
                {isOpen ? (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute top-full mt-2 w-full max-h-40 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-20">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setIsOpen(false);
                        setCurrentIndex(0);
                      }}
                      className="w-full text-left px-4 py-3 text-sm text-[#2A2A72] hover:bg-gray-50 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-row gap-2 justify-center md:justify-end w-full sm:w-auto">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="bg-green-600 rounded-full p-2 hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <svg width="24" height="24" fill="none">
                  <path
                    d="M15 6l-6 6 6 6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex + 6 >= filteredRehabs.length}
                className="bg-green-600 rounded-full p-2 hover:bg-green-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <svg width="24" height="24" fill="none">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {filteredRehabs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No rehab centers found in {selectedCity}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 h-auto md:h-[600px]">
            {/* Left Column - 2 stacked images */}
            <div className="md:col-span-3 flex flex-col gap-3 md:gap-4">
              {displayedRehabs[0] && (
                <a href={displayedRehabs[0].link} target="_blank" rel="noopener noreferrer" className="relative h-48 md:h-1/2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={displayedRehabs[0].image}
                    alt={displayedRehabs[0].name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg font-bold mb-1">{displayedRehabs[0].name}</h3>
                    <p className="text-gray-200 text-sm">{displayedRehabs[0].location}</p>
                  </div>
                </a>
              )}
              {displayedRehabs[1] && (
                <a href={displayedRehabs[1].link} target="_blank" rel="noopener noreferrer" className="relative h-48 md:h-1/2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={displayedRehabs[1].image}
                    alt={displayedRehabs[1].name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg font-bold mb-1">{displayedRehabs[1].name}</h3>
                    <p className="text-gray-200 text-sm">{displayedRehabs[1].location}</p>
                  </div>
                </a>
              )}
            </div>

            {/* Middle Column - Large single image */}
            {displayedRehabs[2] && (
              <a href={displayedRehabs[2].link} target="_blank" rel="noopener noreferrer" className="relative md:col-span-4 h-64 md:h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                  src={displayedRehabs[2].image}
                  alt={displayedRehabs[2].name}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-xl font-bold mb-1">{displayedRehabs[2].name}</h3>
                  <p className="text-gray-200 text-base">{displayedRehabs[2].location}</p>
                </div>
              </a>
            )}

            {/* Right Column - 1 large + 2 smaller images */}
            <div className="md:col-span-5 flex flex-col gap-3 md:gap-4">
              {displayedRehabs[3] && (
                <a href={displayedRehabs[3].link} target="_blank" rel="noopener noreferrer" className="relative h-64 md:h-1/2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    src={displayedRehabs[3].image}
                    alt={displayedRehabs[3].name}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-lg font-bold mb-1">{displayedRehabs[3].name}</h3>
                    <p className="text-gray-200 text-sm">{displayedRehabs[3].location}</p>
                  </div>
                </a>
              )}
              <div className="flex gap-3 md:gap-4 h-48 md:h-1/2">
                {displayedRehabs[4] && (
                  <a href={displayedRehabs[4].link} target="_blank" rel="noopener noreferrer" className="relative w-1/2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      src={displayedRehabs[4].image}
                      alt={displayedRehabs[4].name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-base font-bold mb-1">{displayedRehabs[4].name}</h3>
                      <p className="text-gray-200 text-xs">{displayedRehabs[4].location}</p>
                    </div>
                  </a>
                )}
                {displayedRehabs[5] && (
                  <a href={displayedRehabs[5].link} target="_blank" rel="noopener noreferrer" className="relative w-1/2 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      src={displayedRehabs[5].image}
                      alt={displayedRehabs[5].name}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-base font-bold mb-1">{displayedRehabs[5].name}</h3>
                      <p className="text-gray-200 text-xs">{displayedRehabs[5].location}</p>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RehabGrid;

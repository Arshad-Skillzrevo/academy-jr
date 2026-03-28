"use client";
import Image from "next/image";
import React from "react";

const displayedLogos = [
  "/logos/futureskills.webp",
  "/logos/ites.webp",
  "/logos/meit.webp",
  "/logos/nasscom.webp",
  "/logos/ncet.webp",
  "/logos/nsdc.webp",
  "/logos/skill-india.webp",
    "/logos/futureskills.webp",
  "/logos/ites.webp",
  "/logos/meit.webp",
  "/logos/nasscom.webp",
  "/logos/ncet.webp",
  "/logos/nsdc.webp",
  "/logos/skill-india.webp",
  // "/logos/TAILWIND.png",
  // "/logos/REDUX.png",
];

const LogoMarquee = () => {
  return (
   <div className="relative w-full py-20 max-md:py-15 bg-[#feede7] overflow-hidden">
      {/* <div className="relative inset-0 bg-[url('/semicircle.png')] bg-no-repeat bg-contain  z-10"></div>
       */}
      
      {/* Scroller container */}
      <div className="mx-auto z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-b from-orange-500 to-orange-600 bg-clip-text text-transparent heading-oswald mb-4 px-4 text-center">
            Our Knowledge Partners, Certification Alliances & Curriculum Creators

          </h2>
          {/* <p className="text-gray-700 max-md:px-4">Our courses are partnered with top universities for globally
recognized certifications</p> */}
        </div>

        <div className="w-full overflow-hidden py-4 ">
          {/* Apply the custom marquee animation class */}
          <div className="flex w-max animate-marquee-loop2 gap-4 px-10">
            {displayedLogos.map((logo, index) => (
              <div className="relative h-16 md:h-22 w-32 md:w-44 bg-white  rounded-full shadow" key={index}>
                <Image
                  src={logo}
                  alt={`Logo ${index}`}
                  className="p-3 object-contain"
                  fill
                  sizes="h-16 md:h-22 w-32 md:w-44"
                />
              </div>
                         

            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LogoMarquee;

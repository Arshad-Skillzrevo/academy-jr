// components/Slider.jsx
import Image from "next/image";
import React from "react";

const PartneringCompaniesSlider = () => {
  const logos = [
    "/Partners/3m.webp",
    "../../Partners/abbott.webp",
    "../../Partners/abott.webp",
    "../../Partners/adm.webp",
    "../../Partners/alcoa.webp",
    "../../Partners/altria.webp",
    "../../Partners/arr.webp",
    "../../Partners/ashland.webp",
    "../../Partners/avon.webp",
    "../../Partners/avon2.webp",
    "../../Partners/bms.webp",
    "../../Partners/boieng.webp",
    "../../Partners/campbells.webp",
    "../../Partners/cc.webp",
    "../../Partners/ccp.webp",
    "../../Partners/chevron.webp",
    "Partners/cat.webp",
    "Partners/cocacola.webp",
    "Partners/crown.webp",
  ];

  const logos2 = [
    "Partners/dana.webp",
    "Partners/dow.webp",
    "Partners/exxon.webp",
    "Partners/gd.webp",
    "Partners/ge.webp",
    "Partners/gm.webp",
    "Partners/gml.webp",
    "Partners/gy.webp",
    "Partners/h.webp",
    "Partners/heinz.webp",
    "Partners/hess.webp",
    "Partners/hf.webp",
    "Partners/hw.webp",
    "Partners/ibm.webp",
    "Partners/j.webp",
    "Partners/jd.webp",
    "Partners/kc.webp",
    "Partners/lilly.webp",
    "Partners/lm.webp",
  ];

  const logos3 = [
    "Partners/m.webp",
    "Partners/mgh.webp",
    "Partners/mm.webp",
    "Partners/moto.webp",
    "Partners/ng.webp",
    "Partners/oc.webp",
    "Partners/oi.webp",
    "Partners/ooi.webp",
    "Partners/pepsi.webp",
    "Partners/pf.webp",
    "Partners/pg.webp",
    "Partners/ppg.webp",
    "Partners/ppg2.webp",
    "Partners/ra.webp",
    "Partners/rt.webp",
    "Partners/text.webp",
    "Partners/tree.webp",
    "Partners/ut.webp",
    "Partners/wp.webp",
  ];

  // Duplicate logos once for the content
  const displayedLogos = [...logos, ...logos];
  const displayedLogos2 = [...logos2, ...logos2];
  const displayedLogos3 = [...logos3, ...logos3];

  return (
    <div className="w-full py-15 bg-gradient-to-b from-white via-gray-100 to-white overflow-hidden">
      {/* Scroller container */}
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-6xl font-bold  text-[#1d8fff] mb-3 uppercase heading-oswald">
            Partnering With Companies
          </h2>
          Trusted by top organizations for talent development and workforce
          transformation. Showcase logos of hiring and enterprise partners.
        </div>

        <div className="w-full overflow-hidden py-4">
          {/* Apply the custom marquee animation class */}
          <div className="flex w-max animate-marquee-loop gap-8 px-10 py-2">
            {displayedLogos.map((logo, index) => (
              <div key={index} className="relative h-16 md:h-20 w-32 flex-shrink-0 px-4 py-2 bg-white shadow-xl rounded-full">
                <Image
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain px-4 py-2" // Add flex-shrink-0
              />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-loop-reverse gap-8 px-10 py-2 ">
            {displayedLogos2.map((logo, index) => (
              <div key={index} className="relative h-16 md:h-20 w-32 flex-shrink-0 px-4 py-2 bg-white shadow-xl rounded-full">
                <Image
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain px-4 py-2" // Add flex-shrink-0
              />
              </div>
            ))}
          </div>
          <div className="flex w-max animate-marquee-loop gap-8 px-10 py-2">
            {displayedLogos3.map((logo, index) => (
              <div key={index} className="relative h-16 md:h-20 w-32 flex-shrink-0 px-4 py-2 bg-white shadow-xl rounded-full">
                <Image
                  src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain px-4 py-2" // Add flex-shrink-0
              />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneringCompaniesSlider;

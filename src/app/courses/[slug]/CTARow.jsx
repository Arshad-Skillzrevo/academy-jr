// import React from "react";
// import { PlayCircle, Rocket } from "lucide-react";
// import CTAButton from "@/app/components/CTAbutton";

// /**
//  * CTARow Component
//  * A responsive row of call-to-action buttons with Lucide icons and hover effects.
//  */
// export function CTARow({ title }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-4 mt-10">
//       <CTAButton
//               label="Book a Free Demo"
//               // icon={PlayCircleIcon}
//               ctaLabel={"Book a Free Demo-" + title}
//               pageContext={title}
//               courseName={title}
//               className="kid-btn kid-btn-blue"
//             />
//             <CTAButton
//               label="Schedule a Call"
//               // icon={PlayCircleIcon}
//               ctaLabel={"Schedule a Call-" + title}
//               pageContext={title}
//               courseName={title}
//               className="kid-btn kid-btn-orange"
//             />
//     </div>
//   );
// }

// import React from "react";
// import { PlayCircle, Rocket, Award } from "lucide-react";
// import CTAButton from "@/app/components/CTAbutton";

// /**
//  * CTARow Component
//  * A responsive row of call-to-action buttons with Lucide icons and hover effects.
//  */
// export function CTARow({ title, isBundleCourse }) {
//   // Build certificate path from title — adjust extension if your files are .jpg or .png
//   const certFolder = isBundleCourse ? "bundle" : "single";
//   const certFileName = title?.toLowerCase().replace(/\s+/g, "-");
//   const certPath = `/certificates/${certFolder}/${certFileName}.jpg`;

//   return (
//     <div className="flex flex-col items-center gap-4 mt-10 w-full">
//       {/* View Certificate Button */}
//       <a
//         href={certPath}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black text-white border-2 border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/70 transition-all duration-200 backdrop-blur-sm"
//       >
//         <Award className="w-4 h-4 text-yellow-300" />
//         View Certificate
//       </a>

//       {/* Book Demo + Schedule Call */}
//       <div className="flex flex-wrap justify-center gap-4">
//         <CTAButton
//           label="Book a Free Demo"
//           ctaLabel={"Book a Free Demo-" + title}
//           pageContext={title}
//           courseName={title}
//           className="kid-btn kid-btn-blue"
//         />
//         <CTAButton
//           label="Schedule a Call"
//           ctaLabel={"Schedule a Call-" + title}
//           pageContext={title}
//           courseName={title}
//           className="kid-btn kid-btn-orange"
//         />
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { Award } from "lucide-react";
import CTAButton from "@/app/components/CTAbutton";
import { CertificateModal } from "@/app/components/CertificateModal";
import { CERTIFICATE_MAP } from "@/app/utils/getCertPath";

export function CTARow({ title, type }) {
  const [showCert, setShowCert] = useState(false);
  const certs = CERTIFICATE_MAP[title] ?? null; // direct lookup by title

  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-10 w-full">

        {certs && (
          <button
            onClick={() => setShowCert(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-black text-white border-2 border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/70 transition-all duration-200 backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-yellow-300" />
            View Certificate
            {type === "bundle" && certs.nasscom && (
              <span className="ml-1 text-[10px] bg-yellow-300/20 text-yellow-200 px-2 py-0.5 rounded-full font-black">
                +Nasscom
              </span>
            )}
          </button>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton
            label="Book a Free Demo"
            ctaLabel={"Book a Free Demo-" + title}
            pageContext={title}
            courseName={title}
            className="kid-btn kid-btn-blue"
          />
          <CTAButton
            label="Schedule a Call"
            ctaLabel={"Schedule a Call-" + title}
            pageContext={title}
            courseName={title}
            className="kid-btn kid-btn-orange"
          />
        </div>
      </div>

      <CertificateModal
        isOpen={showCert}
        onClose={() => setShowCert(false)}
        courseTitle={title}
        certs={certs}
      />
    </>
  );
}
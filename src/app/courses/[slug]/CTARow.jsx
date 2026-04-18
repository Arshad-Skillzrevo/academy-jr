import React from "react";
import { PlayCircle, Rocket } from "lucide-react";
import CTAButton from "@/app/components/CTAbutton";

/**
 * CTARow Component
 * A responsive row of call-to-action buttons with Lucide icons and hover effects.
 */
export function CTARow({ title }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      <CTAButton
              label="Book a Free Demo"
              // icon={PlayCircleIcon}
              ctaLabel={"Book a Free Demo-" + title}
              pageContext={title}
              courseName={title}
              className="kid-btn kid-btn-blue"
            />
            <CTAButton
              label="Schedule a Call"
              // icon={PlayCircleIcon}
              ctaLabel={"Schedule a Call-" + title}
              pageContext={title}
              courseName={title}
              className="kid-btn kid-btn-orange"
            />
    </div>
  );
}
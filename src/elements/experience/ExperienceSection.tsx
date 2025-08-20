import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./data";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 30); // speed of progress fill
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex relative justify-center items-center">
      {/* Steps */}c
      <div className="flex flex-col gap-10 w-full max-w-4xl">
        {experiences.map((exp, idx) => {
          const stepPercent = ((idx + 1) / experiences.length) * 100;
          const isVisible = progress >= stepPercent;

          // Alternate layout: left for even, right for odd
          const flexDirection = idx % 2 === 0 ? "flex-row" : "flex-row-reverse";

          return (
            <div key={idx} className={`relative flex items-center ${flexDirection} gap-6`}>
              {/* Connector Dot: position on left or right accordingly */}
              <div
                className={`absolute top-0 w-6 h-6 rounded-full border-4 border-yellow-500 bg-gray-900 z-10 ${
                  idx % 2 === 0 ? "-left-[3.15rem]" : "-right-[3.15rem]"
                }`}
              />
                <ExperienceCard exp={exp} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

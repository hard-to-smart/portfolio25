import { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "./data";
import { motion, useInView } from "framer-motion";
import { ScrollProgress } from "../../components/magicui/scroll-progress";

export default function ExperienceSection() {
  const containerRef = useRef(null);

  return (
    <div // wrap everything for scroll detection
      className="relative flex flex-col items-center min-h-[100vh]"
      ref={containerRef}
    >
      {/* Progress Bar (Centered Vertical) */}
      <div className="absolute max-lg:hidden left-1/2 top-0 flex pointer-events-none" style={{ transform: "translateX(-50%)",  height: "130%" }}>
        <ScrollProgress className="h-full w-1 " />
      </div>

      {/* Experience cards */}
      <div className="relative w-full max-w-4xl flex flex-col gap-20">
        {experiences.sort((a, b)=> a.order - b.order).map((exp, idx) => {
          // Card appears when its own hook triggers in-view
          const cardRef = useRef(null);
          const inView = useInView(cardRef, { once: true, margin: "-100px 0px" });

          // Layout: left or right
          const align = idx % 2 === 0 ? "left" : "right";
          return (
            <div
              key={idx}
              ref={cardRef}
              className={`relative flex w-full gap-14 min-h-[180px] ${align === "left" ? "justify-start" : "justify-end"}`}
              style={{ alignItems: "center" }}
            >
              {/* Spacer for alignment */}
              {align === "right" && <div className="w-1/2 max-lg:hidden"></div>}
              {/* Card (animated in when inView) */}
              <motion.div
                initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.07 * idx }}
                className="w-1/2 max-lg:w-full 
                "
              >
                <ExperienceCard exp={exp} />
              </motion.div>
              {align === "left" && <div className="w-1/2 max-lg:hidden"></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

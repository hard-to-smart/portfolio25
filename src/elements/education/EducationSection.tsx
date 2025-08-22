import { useEffect, useMemo, useState } from "react";
import { ArcTimeline, type ArcTimelineItem } from "../../components/magicui/arc-timeline";
import { cn } from "../../lib/utils";
import {motion} from "motion/react";
import { useInView } from "react-intersection-observer";

export function EducationSection() {
  const [arcConfig, setArcConfig] = useState({
    circleWidth: 4500,
    angleBetweenMinorSteps: 0.9,
    lineCountFillBetweenSteps: 10,
    boundaryPlaceholderLinesCount: 25,
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setArcConfig({
          circleWidth: 1500,
          angleBetweenMinorSteps: 1,
          lineCountFillBetweenSteps: 8,
          boundaryPlaceholderLinesCount: 15,
        });
      } else {
        setArcConfig({
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.9,
          lineCountFillBetweenSteps: 7,
          boundaryPlaceholderLinesCount: 25,
        });
      }
    }

    // Set initial config
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  

  return (
    <div
      className="top-1/2 left-1/2 scale-[0.8] origin-center h-fit"
    >
   <ArcTimeline
      className={cn(
        "[--step-line-active-color:#9780ff]",
        "[--step-line-inactive-color:#737373]",
        "[--placeholder-line-color:#737373]",
        "[--time-active-color:#fff]",
        "[--time-inactive-color:#a3a3a3]",
        "[--description-color:#d4d4d4]"
      )}
      data={TIMELINE}
      defaultActiveStep={{ time: "2019", stepIndex: 0 }}
      arcConfig={arcConfig}
    />
    {/* </motion.div> */}
    </div>
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "2017",
    steps: [
      {
        icon: "10th",
        content:
         (<>
          St. Edmunds School, Jpr <br /> 10 CGPA
        </>),
      },
    ],
  },
  {
    time: "2019",
    steps: [
      {
        icon: "12th",
        content:
         (<>St. Anselms School, Jpr <br/> 89%</>),
      },
    ],
  },
  {
    time: "2019-22",
    steps: [
      {
        icon: "BACHELORS",
        content: (<>University of Rajasthan, Jpr <br/> 81.2%</>),
      },
    ],
  },
  {
    time: "2022-24",
    steps: [
      {
        icon: "MASTERS",
        content:
          (<>Amity University, Jpr <br/> 95.2%</>),
      },

    ],
  },
 ];

export default EducationSection
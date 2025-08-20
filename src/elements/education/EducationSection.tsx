import { useEffect, useMemo, useState } from "react";
import { ArcTimeline, type ArcTimelineItem } from "../../components/magicui/arc-timeline";
import { cn } from "../../lib/utils";

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
      //   setArcConfig({
      //     circleWidth: 1500,
      //     angleBetweenMinorSteps: 0.5,
      //     lineCountFillBetweenSteps: 5,
      //     boundaryPlaceholderLinesCount: 7,
      //   });
      // } else if (window.innerWidth < 1024) {
        setArcConfig({
          circleWidth: 2500,
          angleBetweenMinorSteps: 0.6,
          lineCountFillBetweenSteps: 5,
          boundaryPlaceholderLinesCount: 25,
        });
      } else {
        setArcConfig({
          circleWidth: 4500,
          angleBetweenMinorSteps: 0.6,
          lineCountFillBetweenSteps: 10,
          boundaryPlaceholderLinesCount: 35,
        });
      }
    }

    // Set initial config
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.8] scale-100 origin-center">
   <ArcTimeline
      data={TIMELINE}
      defaultActiveStep={{ time: "2025 Q2", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 8,
        boundaryPlaceholderLinesCount: 50,
      }}
    />
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
        icon: "bachelors",
        content: (<>University of Rajasthan, Jpr <br/> 81.2%</>),
      },
    ],
  },
  {
    time: "2022-24",
    steps: [
      {
        icon: "masters",
        content:
          (<>Amity University, Jpr <br/> 95.2%</>),
      },

    ],
  },
 ];

export default EducationSection
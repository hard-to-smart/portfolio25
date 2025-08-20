import { useEffect, useRef, useState } from "react";
import Hero from "./elements/about/Hero";
import EducationSection from "./elements/education/EducationSection";
import Timeline from "./elements/experience/ExperienceSection";
import { Skills } from "./elements/skills/Skills";
import Title from "./elements/headings/Title";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AuroraHero } from "./elements/background/AuroraHero";
import ExperienceSection from "./elements/experience/ExperienceSection";

const sections = [
  {
    id: "#experience",
    titleProps: { prefix: "My", mainText: "Experience ." },
    Component: ExperienceSection,
    flexDirection: 'flex-col'
  },
  {
    id: "education",
    titleProps: { prefix: "My", mainText: "Education ."},
    Component: EducationSection,
    flexDirection: 'flex-col'
  },
  {
    id: "skills",
    titleProps: { prefix: "My", mainText: "Skills ."},
    Component: Skills,
    flexDirection: 'flex-col'
  },
];
const Home = () => {
  return (

    <div>
      <Hero/>
 
      {sections.map((section) => {
        const { ref, inView } = useInView({
          threshold: 0.3,
        });
        return (
          <section
            id={section.id}
            key={section.id}
            className={`flex ${section.flexDirection} items-center justify-center min-h-[80vh] w-[100vw]`}
            ref={ref}
          >
            <motion.div
              className="flex px-10 h-fit"
              initial={{ opacity: 0, y: 50 }}
              style={{ filter: 'blur(5px)' }}
              animate={inView ? { filter: 'blur(0px)', opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Title {...section.titleProps} />
            </motion.div>
            <motion.div
              className="relative flex-1 w-full px-10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <section.Component />
            </motion.div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;

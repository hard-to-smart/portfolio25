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
import { Particles } from "./components/magicui/particles";

const sections = [
  {
    id: "experience",
    titleProps: { prefix: "My", mainText: "Experience ." },
    Component: ExperienceSection,
    className: 'flex-col min-h-[80vh]'
  },
  {
    id: "education",
    titleProps: { prefix: "My", mainText: "Qualification ."},
    Component: EducationSection,
    className: 'flex-col min-h-[40vh]'
  },
  {
    id: "skills",
    titleProps: { prefix: "My", mainText: "Skills ."},
    Component: Skills,
    className: 'flex-col min-h-[80vh]'
  },
];
const Home = () => {
  return (

    <div>
      <Hero/>
      {sections.map((section) => {
        
        return (
          <section
            id={section.id}
            key={section.id}
            className={`flex ${section.className} items-center gap-10 py-10 justify-center w-[100vw]`}
          >
              <Title {...section.titleProps}/>
            <div
              className="relative flex-1 w-full px-10 "
            >
              <section.Component />
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Home;

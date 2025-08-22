import { ProjectCard } from "./ProjectCard";
import Title from "../headings/Title";
import { motion } from "framer-motion";
import { InteractiveGridPattern } from "../../components/magicui/interactive-grid-pattern";
import { data } from "./data";

const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], type: "spring", stiffness: 100 },
  },
};

const Projects = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center gap-10 overflow-visible rounded-lg px-20 md:px-28 max-sm:px-0 ">
      
      {/* Interactive Grid Pattern positioned behind */}
      <InteractiveGridPattern className="w-full h-full"
      />

      <Title prefix="My" mainText="Projects ." />

      <motion.div
        className="flex flex-wrap gap-10 max-sm:gap-6 justify-evenly w-full "
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.sort((a,b)=> a.order - b.order).map((project, i) => (
          <motion.div
            key={project.title + i}
            variants={cardVariant}
            whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0 }}
            className="cursor-pointer"
          >
            <ProjectCard card={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

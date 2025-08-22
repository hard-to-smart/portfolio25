import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";
import { data } from "./data";
import { motion} from 'framer-motion';

export function Skills() {
  const [ref , inView] = useInView();
  return (
    <div ref={ref} className="flex flex-row gap-10 justify-center items-center bg-transparent flex-wrap md:px-28 px-20 max-sm:px-0">
        {
            data.map((el, index)=> {
                return (
                  <motion.div
                  key={el.name}  // make sure to have unique key
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {opacity: 0, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                >
                <SkillCard key={el.name} {...el} />
                </motion.div>
                )
            })
        }
    </div>
  );
}

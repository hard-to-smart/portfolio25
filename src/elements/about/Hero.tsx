import { motion } from "framer-motion";
import { AuroraHero } from "../background/AuroraHero";
import ParallaxClouds from "../background/ParallalxCoulds";



export function Hero() {


  return (
    <>
    <AuroraHero />
      <ParallaxClouds/>
      {/* Animated Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, 0, 20] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="36" height="36" fill="none" className="mx-auto">
          <circle cx="18" cy="18" r="16" stroke="#FFF" strokeWidth="2" opacity="0.5"/>
          <path d="M18 10 v10" stroke="#FFF" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="18" cy="23" r="2" fill="#FFF"/>
        </svg>
      </motion.div>
    </>
  );
}

export default Hero
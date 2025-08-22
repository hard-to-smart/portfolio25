import cloud2 from '../../assets/Clouds2.png';
import cloud3 from '../../assets/Clouds3.png';
import cloud4 from '../../assets/Clouds4.png';
import cloud5 from '../../assets/Clouds5.png';
import cloud6 from '../../assets/Clouds6.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SparklesText } from '../../components/magicui/sparkles-text';
import { AuroraText } from '../../components/magicui/aurora-text';
import { WordRotate } from "../../components/magicui/word-rotate";
import { RainbowButton } from '../../components/magicui/rainbow-button';

export default function ParallaxClouds() {
  const cloudImages = [
      cloud6,
      cloud5,
      cloud2,
      cloud3,
      cloud4,
  ];

  const { scrollY } = useScroll();

  // Parallax ranges for your 5 clouds (front to back)
  const parallaxRanges = [
    [0, 300], // closest (land/cloud4)
    [0, 160],
    [0, 140],
    [0, 140],
    [0, 140],  // farthest (cloud6)
  ];
  const exposureValues = [
    1.0,  // most exposed (brightest) for top cloud
    0.87,
    0.75,
    0.6,
    0.1,  // least exposed (darkest) for land/cloud4
  ];

  const handleDownloadResume=()=>{
    const resumeUrl = 'https://drive.google.com/file/d/1hEtEcf6MysQ2dZGWPZ8yPz8EKCo85Its/view?usp=drive_link';
    window.open(resumeUrl, '_blank');
  }
  // Adjusted bottom positions to vertically stack and space clouds nicely
  const bottomPositions = ['108px', '78px', '48px', '24px', '0px'];

  return (
    <>
      {/* Styled About Me Section */}
      <section
  id="about"
  className="pointer-events-auto absolute inset-0 z-1 brightness-100 flex flex-col items-center justify-center mx-auto text-center text-white select-text px-4"
>
  {/* Main Heading */}
  <motion.h1
    initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
    animate={{ scale: 1, rotate: 0, opacity: 1 }}
    transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
    className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl"
  >
    Hello, I am{" "}
    <SparklesText>
      <AuroraText>Divya Punjabi</AuroraText>
    </SparklesText>
  </motion.h1>

  {/* Sub Heading in One Line */}
  <motion.h2
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, delay: 0.2, type: "spring" }}
    className="text-2xl sm:text-3xl font-semibold mb-6 flex flex-wrap items-center justify-center gap-2 drop-shadow-md"
  >
    A passionate
    <span className="text-4xl font-bold text-emerald-400">
      <WordRotate
        className="inline-block"
        words={["Frontend", "Backend", "Full Stack"]}
      />
    </span>   Developer
  </motion.h2>

  {/* Description */}
  {/* <motion.p
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-lg sm:text-xl font-medium mb-10 max-w-xl drop-shadow-md"
  >
    from India crafting beautiful and functional web experiences.
  </motion.p> */}

  {/* Buttons */}
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
    className="flex flex-wrap gap-4 justify-center"
  >
    <RainbowButton variant="default" size="lg" className='text-black' onClick={()=> handleDownloadResume()}>
      Download Resume
    </RainbowButton>
    <RainbowButton variant="outline" size="lg" className='text-white'  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
      See My Work
    </RainbowButton>
  </motion.div>
</section>

      <div className='brightness-[30%] opacity-[0.4] pointer-events-none absolute bottom-0  left-1/2 w-full max-w-[100vw] h-[300px] md:h-[320px] lg:h-[360px] -translate-x-1/2 top-25'>
      {cloudImages.map((cloud, i) => {
        const y = useTransform(scrollY, [0, 100], parallaxRanges[i]);
        return (
          <motion.img
            key={cloud}
            src={cloud}
            alt={`Cloud layer ${i + 1}`}
            style={{
              y,
              left: '0%',
              position: 'absolute',
              transform: 'translateX(-50%)',
              width: '100vw',
              maxWidth: '100vw',
              maxHeight:'80vh',
              marginBottom:bottomPositions[i],
              opacity: 0.9 - i * 0.12,
              filter: `brightness(${exposureValues[i]}) contrast(5)`,
             zIndex: 10 + i,
            }}
            
            className="select-none"
            draggable="false"
          />
        );
      })}
      </div>
    </>
  );
}

import ChatContactForm from "./elements/contact/ChatContactForm";
import { DockDemo } from "./elements/contact/Dock";
import Title from "./elements/headings/Title";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      
      {/* Google Maps Jaipur Background */}
      <iframe
        title="Jaipur Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14226.95181765357!2d75.78040255!3d26.91243345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d6b7987d4d%3A0x4d1e1790a12f8c9b!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1692118479056!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full border-0"
        style={{ filter: "brightness(70%)" }} // optional dimming for better UI contrast
      ></iframe>
      <Title prefix="Contact" mainText="Me ."/>
      {/* Floating Chat Form with 3D animation */}
      <DockDemo/>
      <div
        style={{ transformStyle: "preserve-3d", perspective: "1200px" }}
        className="sm:mx-auto mt-10 z-1"
      >
        <motion.div
          initial={{ transform: "translateZ(8px) translateY(-2px)" }}
          animate={{ transform: "translateZ(32px) translateY(-8px)" }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 2,
            ease: "easeInOut",
          }}
          className="relative rounded-[25px] scale-[0.8] md:scale-[1] backdrop-blur-[1.5px]"
          style={{backgroundColor: "rgba(0, 0, 0, 0.4)",
          boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.7)"}}
        >
          <ChatContactForm />
        </motion.div>
      </div>
    </div>
  );
}





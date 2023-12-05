import { motion } from "framer-motion";
import banner from "../../assets/Polygon Luminary (1).svg";
import useTypewriter from 'react-typewriter-hook';

const Banner = () => {
  const text = "Welcome to TechVerse - Where Technology and Innovation converge. Discover a world of high-quality electronics, unparalleled performance, and endless possibilities. Experience the next level of Innovation at TechVerse. From State-of-the-Art smart devices to cutting-edge home appliances, we bring Tomorrow's Technology to you Today";

  const typedText = useTypewriter(text);

  return (
    <div className="relative mb-16 lg:mb-24">
      {/* Background Image */}
      <img
        className="h-screen w-full object-cover"
        src={banner}
        alt="TechVerse Banner"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Text */}
      <div className="absolute inset-0 text-center flex flex-col justify-center">
        <motion.h1
          initial= { {x: -1000} }
          animate= {{x: 0}}
          transition = {{duration:"2", delay: "1"}}
          className="text-3xl lg:text-5xl font-bold text-sky-100 mb-4"
        >
          Welcome to TechVerse
        </motion.h1>
        <p className="lg:text-lg lg:font-medium text-sky-200 px-3">
          {typedText}
        </p>
      </div>
    </div>
  );
};

export default Banner;



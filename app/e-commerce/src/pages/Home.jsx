import React from "react";
import { motion, useInView } from "framer-motion";
import Carousel from "../components/Carousel";

function Home() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative">
      <Carousel />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
        transition={{ duration: 3 }}
        className="scroll-in absolute top-[50%] right-[50%] rounded-full
            text-amber-400 bg-opacity-75 bg-black outline-none justify-center "
      >
        <h1 className="text-6xl font-semibold font-serif pt-2">
          Welcome to the WhiteEagle Shop
        </h1>
        <h3>
          <p className="p-5 text-white text-lg">
            Your one-stop shop for all your Fashion needs
          </p>
        </h3>
      </motion.div>
    </div>
  );
}

export default Home;

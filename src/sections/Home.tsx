import pngCoffee from "../assets/imgs/png-coffee1.png";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div id="home" className="min-h-screen flex justify-center items-center px-20">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="p-16 text-gray-100">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} // Faster transition
            className="display-quote text-5xl leading-18 font-black"
          >
            We serve the richest and creamiest coffee in the city of Ormoc.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Slight delay for layering effect
            className="text-lg leading-12 tracking-wide"
          >
            Discover a whole new level of flavor and enjoyable.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }} // Smooth button animation
            className="my-6 text-2xl py-4 px-8 bg-(--fifth-color) hover:bg-[#a34b08] flex items-center gap-2 rounded-full cursor-pointer font-extralight"
          >
            <ShoppingCart size={24} /> Order now
          </motion.button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Reduced delay for a snappier effect
        className="flex-1 p-4 flex justify-center items-center"
      >
        <div className="w-[30rem]">
          <img src={pngCoffee} alt="pngImg" className="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

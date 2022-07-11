import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-dots">
      <div className="px-2 py-3 mx-auto flex justify-center  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <div className="grid grid-cols-1 justify-center gap-4 lg:grid-cols-2">
          <div className="grid grid-cols-1 max-w-xl gap-8">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className=" text-5xl lg:text-6xl font-bold"
            >
              Your headline goes here.{" "}
              <span className="text-red-500">Catch their attention!</span>{" "}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-gray-500 text-sm lg:text-xl"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolor
              asperiores consectetur voluptatum quae voluptas illo debitis
              impedit, natus libero quis itaque molestias magni enim
              reprehenderit nemo id nesciunt.
            </motion.p>

            <div className="flex  gap-4">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="  lg:text-xl py-2 px-4 rounded-lg text-white bg-red-400 hover:bg-red-600  transition-all duration-300"
              >
                Get Started{" "}
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="  lg:text-xl  py-2 px-4 rounded-lg text-red-700 border border-red-700 bg-red-100 hover:bg-red-300  transition-all duration-300"
              >
                Contact Us{" "}
              </motion.button>
            </div>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Image
              className=" mt-10 lg:mt-0 "
              src="/images/svg11.svg"
              width={430}
              height={430}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

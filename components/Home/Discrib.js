import Image from "next/image";
import { motion } from "framer-motion";
const Discrib = () => {
  return (
    <div className="px-2 py-10 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
      <h1 className="text-2xl lg:text-5xl mb-10 font-bold text-center ">
        Describe how your product works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
        <div className="grid grid-cols-1  gap-3">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/svg12.svg" width={250} height={250} />
          </motion.div>
          <h4 className="text-xl text-center font-bold">step#1</h4>
          <p className="text-slate-500 text-center px-8 md:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            perspiciatis voluptate delectus quas veniam architecto tempora,
            libero velit minima?
          </p>
        </div>
        <div className="grid grid-cols-1  gap-3">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/svg13.svg" width={250} height={250} />
          </motion.div>
          <h4 className="text-xl text-center font-bold">step#2</h4>
          <p className="text-slate-500 text-center px-8 md:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            perspiciatis voluptate delectus quas veniam architecto tempora,
            libero velit minima?
          </p>
        </div>
        <div className="grid grid-cols-1  gap-3">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/svg14.svg" width={250} height={250} />
          </motion.div>

          <h4 className="text-xl text-center font-bold">step#3</h4>
          <p className="text-slate-500 text-center px-8 md:px-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            perspiciatis voluptate delectus quas veniam architecto tempora,
            libero velit minima?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discrib;

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <section className=" py-3 mx-auto  flex justify-between   sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
        <Link href='/'><div className=" cursor-pointer rounded-full flex justify-center">
          <Image src="/logo.svg" className="relative " width={80} height={80} />
        </div></Link>

        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" flex   items-center relative  list  gap-8 text-gray-700"
        >
          <li className="hover:text-red-400 cursor-pointer"><Link href="/About">About</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/FAQ'>FAQ</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/Contact'>Contact</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/Pricing'>Pricing</Link></li>
        </motion.ul>
      </section>
    </nav>
  );
};

export default Navbar;

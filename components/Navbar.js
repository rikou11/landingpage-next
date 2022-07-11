import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faBars, faCheck} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false); return (
    <nav >
      {/* <section className=" py-3 mx-auto  flex justify-between   sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  "> */}
        {/* <Link href='/'><div className=" cursor-pointer rounded-full flex justify-center">
          <Image src="/logo.svg" className="relative " width={80} height={80} />
        </div></Link> */}

    
      <nav className="relative flex flex-wrap items-center justify-between    px-2 py-3  mb-3">
        <div className="container px-4 mx-2 md:mx-32 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href='/'><div className=" cursor-pointer rounded-full flex justify-center"><Image src="/logo.svg" className="relative " width={80} height={80} />
        </div></Link>
       
            <button
              className="text-slate-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
             <FontAwesomeIcon icon={faBars}/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex  py-4" : " hidden")
            }
            id="example-navbar-danger"
          >
            <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} className="flex flex-col lg:flex-row list-none lg:ml-auto gap-8 ">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                  href="/About"
                >
                <span className="ml-2 hover:text-red-400 cursor-pointer">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                  href="/FAQ"
                >
                  <span className="ml-2 hover:text-red-400 cursor-pointer">FAQ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                  href="/Pricing"
                >
                 <span className="ml-2 hover:text-red-400 cursor-pointer">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-slate-700 "
                  href="/Contact"
                >
                 <span className="ml-2 hover:text-red-400 cursor-pointer">Contact</span>
                </Link>
              </li>
            </motion.ul>
          </div>
        </div>
      </nav>
    

        {/* <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className=" flex   items-center relative  list  gap-8 text-gray-700"
        >
          <li className="hover:text-red-400 cursor-pointer"><Link href="/About">About</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/FAQ'>FAQ</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/Contact'>Contact</Link></li>
          <li className="hover:text-red-400 cursor-pointer"><Link href='/Pricing'>Pricing</Link></li>
        </motion.ul> */}
      {/* </section> */}
    </nav>
  );
};

export default Navbar;

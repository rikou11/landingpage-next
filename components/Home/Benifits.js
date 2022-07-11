import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Benifits = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <div className="px-2 py-10 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-4  ">
      <h1 className="text-center text-5xl font-bold my-4">
        The best you can get
      </h1>

      <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
        <div className="grid items-center">
          <div className="grid grid-cols-1 gap-3 max-w-lg">
            <h1 className="font-bold text-center text-lg lg:text-4xl">
              Benifit #
            </h1>
            <p className="text-slate-500 text-left px-8 md:px-0">
              Ipsum qui exercitation excepteur qui sint consectetur officia quis
              ex. Amet adipisicing do aute ad tempor ut sit occaecat deserunt
              esse velit enim anim id. Aliquip cillum eiulgod irure cillum est
              sunt laboris tempor consequat elit ullamco. Ipsum dolor culpa
              dolor ea.
            </p>
            <ul className="">
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center rounded-lg big-dot">
          <Image
            data-aos="fade-left"
            src="/benifit1.jpg"
            className="rounded-lg "
            width={400}
            height={600}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
        <div className="flex justify-center rounded-lg big-dot-left">
          <Image
            data-aos="fade-right"
            src="/benifit2.jpg"
            className="rounded-lg "
            width={400}
            height={600}
          />
        </div>
        <div className="grid items-center 	 ">
          <div className="grid grid-cols-1 gap-3 max-w-lg">
            <h1 className="font-bold text-center text-lg lg:text-4xl">
              Benifit #
            </h1>
            <p className="text-slate-500 text-left px-8 md:px-0">
              Ipsum qui exercitation excepteur qui sint consectetur officia quis
              ex. Amet adipisicing do aute ad tempor ut sit occaecat deserunt
              esse velit enim anim id. Aliquip cillum eiulgod irure cillum est
              sunt laboris tempor consequat elit ullamco. Ipsum dolor culpa
              dolor ea.
            </p>
            <ul className="">
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2  grid-cols-1 gap-8">
        <div className="grid items-center">
          <div className="grid grid-cols-1 gap-3 max-w-lg">
            <h1 className="font-bold text-center text-lg lg:text-4xl">
              Benifit #
            </h1>
            <p className="text-slate-500 text-left px-8 md:px-0">
              Ipsum qui exercitation excepteur qui sint consectetur officia quis
              ex. Amet adipisicing do aute ad tempor ut sit occaecat deserunt
              esse velit enim anim id. Aliquip cillum eiulgod irure cillum est
              sunt laboris tempor consequat elit ullamco. Ipsum dolor culpa
              dolor ea.
            </p>
            <ul className="">
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptate, quos!
              </li>
              <li className="ml-6">
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center rounded-lg big-dot">
          <Image
            data-aos="fade-left"
            src="/benifit3.jpg"
            className="rounded-lg "
            width={400}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Benifits;

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultingPicture from "../public/consulting.jpg";

const HeroBannerPropos = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white">
      <section className="mx-auto container pt-12">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col lg:w-5/12 md:w-6/12 px-4 lg:pr-3 justify-center md:mb-0 lg:mb-24 md:pt-0 lg:pt-24">
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-none text-gray-800 tracking-wide">
              Construire, conseil et aide.
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed pt-8">
              Hey Kevin, Just sit back and relax. Your order has been picked,
              packed, and shipped at your doorstep. Enjoy designing your
              project. Hope you have a great experience Trust atmosphere plus a
              state of urgency for our customers.
            </p>
            <label
              htmlFor="email"
              className="text-xl text-gray-800 pt-12 leading-normal"
            >
              Sign Up to get notified
            </label>
            <div className="pt-4 flex flex-col sm:flex-row md:flex-col xl:flex-row items-start sm:items-center md:items-start xl:items-center">
              <input
                placeholder="Enter your email"
                id="email"
                className="focus:outline-none rounded px-4 py-4 focus:border-indigo-700 border border-gray-500 mr-6 w-full sm:w-7/12 md:w-full xl:w-8/12 font-light"
                type="text"
              />
              <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-4 text-lg w-40 xl:w-auto mt-4 sm:mt-0 md:mt-4 xl:mt-0">
                Sign Up
              </button>
            </div>
          </div>
          <div className="md:w-6/12 lg:w-7/12 relative mx-4 md:mx-4 lg:ml-20 lg:mr-0 pt-12 md:pt-0 lg:pt-0">
            <Image
              className="pr-4 sm:pr-16 md:pr-12 xl:pr-32 pb-24 relative z-10 w-full"
              src={ConsultingPicture}
              alt="Glasses"
            />
            <div className="absolute bg-yellow-600 opacity-80 bottom-0 mb-10 right-0 top-0 left-0 flex flex-col items-end justify-end pr-8 pb-8 ml-4 lg:ml-32 mt-16 md:mt-12">
              <svg width={207} height={144} xmlns="http://www.w3.org/2000/svg">
                <g fill="#cd6133" fillRule="evenodd">
                  <rect width={4} height={4} rx={2} />
                  <rect x={23} width={4} height={4} rx={2} />
                  <rect x={45} width={4} height={4} rx={2} />
                  <rect x={68} width={4} height={4} rx={2} />
                  <rect x={90} width={4} height={4} rx={2} />
                  <rect x={113} width={4} height={4} rx={2} />
                  <rect x={135} width={4} height={4} rx={2} />
                  <rect x={158} width={4} height={4} rx={2} />
                  <rect x={181} width={4} height={4} rx={2} />
                  <rect x={203} width={4} height={4} rx={2} />
                  <rect y={18} width={4} height={4} rx={2} />
                  <rect x={23} y={18} width={4} height={4} rx={2} />
                  <rect x={45} y={18} width={4} height={4} rx={2} />
                  <rect x={68} y={18} width={4} height={4} rx={2} />
                  <rect x={90} y={18} width={4} height={4} rx={2} />
                  <rect x={113} y={18} width={4} height={4} rx={2} />
                  <rect x={135} y={18} width={4} height={4} rx={2} />
                  <rect x={158} y={18} width={4} height={4} rx={2} />
                  <rect x={181} y={18} width={4} height={4} rx={2} />
                  <rect x={203} y={18} width={4} height={4} rx={2} />
                  <rect y={35} width={4} height={4} rx={2} />
                  <rect x={23} y={35} width={4} height={4} rx={2} />
                  <rect x={45} y={35} width={4} height={4} rx={2} />
                  <rect x={68} y={35} width={4} height={4} rx={2} />
                  <rect x={90} y={35} width={4} height={4} rx={2} />
                  <rect x={113} y={35} width={4} height={4} rx={2} />
                  <rect x={135} y={35} width={4} height={4} rx={2} />
                  <rect x={158} y={35} width={4} height={4} rx={2} />
                  <rect x={181} y={35} width={4} height={4} rx={2} />
                  <rect x={203} y={35} width={4} height={4} rx={2} />
                  <rect y={53} width={4} height={4} rx={2} />
                  <rect x={23} y={53} width={4} height={4} rx={2} />
                  <rect x={45} y={53} width={4} height={4} rx={2} />
                  <rect x={68} y={53} width={4} height={4} rx={2} />
                  <rect x={90} y={53} width={4} height={4} rx={2} />
                  <rect x={113} y={53} width={4} height={4} rx={2} />
                  <rect x={135} y={53} width={4} height={4} rx={2} />
                  <rect x={158} y={53} width={4} height={4} rx={2} />
                  <rect x={181} y={53} width={4} height={4} rx={2} />
                  <rect x={203} y={53} width={4} height={4} rx={2} />
                  <rect y={70} width={4} height={4} rx={2} />
                  <rect x={23} y={70} width={4} height={4} rx={2} />
                  <rect x={45} y={70} width={4} height={4} rx={2} />
                  <rect x={68} y={70} width={4} height={4} rx={2} />
                  <rect x={90} y={70} width={4} height={4} rx={2} />
                  <rect x={113} y={70} width={4} height={4} rx={2} />
                  <rect x={135} y={70} width={4} height={4} rx={2} />
                  <rect x={158} y={70} width={4} height={4} rx={2} />
                  <rect x={181} y={70} width={4} height={4} rx={2} />
                  <rect x={203} y={70} width={4} height={4} rx={2} />
                  <rect y={88} width={4} height={4} rx={2} />
                  <rect x={23} y={88} width={4} height={4} rx={2} />
                  <rect x={45} y={88} width={4} height={4} rx={2} />
                  <rect x={68} y={88} width={4} height={4} rx={2} />
                  <rect x={90} y={88} width={4} height={4} rx={2} />
                  <rect x={113} y={88} width={4} height={4} rx={2} />
                  <rect x={135} y={88} width={4} height={4} rx={2} />
                  <rect x={158} y={88} width={4} height={4} rx={2} />
                  <rect x={181} y={88} width={4} height={4} rx={2} />
                  <rect x={203} y={88} width={4} height={4} rx={2} />
                  <rect y={105} width={4} height={4} rx={2} />
                  <rect x={23} y={105} width={4} height={4} rx={2} />
                  <rect x={45} y={105} width={4} height={4} rx={2} />
                  <rect x={68} y={105} width={4} height={4} rx={2} />
                  <rect x={90} y={105} width={4} height={4} rx={2} />
                  <rect x={113} y={105} width={4} height={4} rx={2} />
                  <rect x={135} y={105} width={4} height={4} rx={2} />
                  <rect x={158} y={105} width={4} height={4} rx={2} />
                  <rect x={181} y={105} width={4} height={4} rx={2} />
                  <rect x={203} y={105} width={4} height={4} rx={2} />
                  <rect y={123} width={4} height={4} rx={2} />
                  <rect x={23} y={123} width={4} height={4} rx={2} />
                  <rect x={45} y={123} width={4} height={4} rx={2} />
                  <rect x={68} y={123} width={4} height={4} rx={2} />
                  <rect x={90} y={123} width={4} height={4} rx={2} />
                  <rect x={113} y={123} width={4} height={4} rx={2} />
                  <rect x={135} y={123} width={4} height={4} rx={2} />
                  <rect x={158} y={123} width={4} height={4} rx={2} />
                  <rect x={181} y={123} width={4} height={4} rx={2} />
                  <rect x={203} y={123} width={4} height={4} rx={2} />
                  <rect y={140} width={4} height={4} rx={2} />
                  <rect x={23} y={140} width={4} height={4} rx={2} />
                  <rect x={45} y={140} width={4} height={4} rx={2} />
                  <rect x={68} y={140} width={4} height={4} rx={2} />
                  <rect x={90} y={140} width={4} height={4} rx={2} />
                  <rect x={113} y={140} width={4} height={4} rx={2} />
                  <rect x={135} y={140} width={4} height={4} rx={2} />
                  <rect x={158} y={140} width={4} height={4} rx={2} />
                  <rect x={181} y={140} width={4} height={4} rx={2} />
                  <rect x={203} y={140} width={4} height={4} rx={2} />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBannerPropos;

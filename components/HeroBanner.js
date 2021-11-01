import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultingPicture from "../public/consulting3.jpg";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 object-cover w-full h-full">
        <Image
          src={ConsultingPicture}
          alt=""
          width={900}
          height={900}
          layout="fill"
          quality={100}
          priority
          placeholder="blur"
        />
      </div>
      <div className="relative  bg-yellow-700 bg-opacity-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Digital Marketer <br className="hidden md:block" />
                je vous aide à promouvoir{" "}
                <span className="text-teal-accent-400 text-yellow-800">
                  ta marque sur le web.
                </span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                J’ai une expèrience de plus de 10 ans dans le digital avec des
                grandes marques du voyage, du luxe et du e-commerce.
              </p>
            </div>
            <div className="w-full h-auto max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Un projet
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      Prénom
                    </label>
                    <input
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Nom
                    </label>
                    <input
                      placeholder="Doe"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="projet"
                      className="inline-block mb-1 font-medium"
                    >
                      Explique moi ton projet
                    </label>
                    <textarea
                      name="projet"
                      id="projet"
                      placeholder="Je veux ..."
                      className="flex-grow w-full h-28 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      cols="30"
                      rows="30"
                    ></textarea>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center 
                      border border-yellow-600 justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-yellow-600 hover:text-white focus:shadow-outline focus:outline-none"
                    >
                      Envoi
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Nous respectons vos données personnel.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

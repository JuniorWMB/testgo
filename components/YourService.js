import React from "react";
import Image from "next/image";
import { services } from "../tools/tools";

const YourService = () => {
  return (
    <>
      <div className="  px-4 py-16 sm:max-w-xl md:max-w-full lg: md:px-24 lg:px-8 lg:py-20 mx-2">
        <div className="max-w-xl flex place-items-center flex-col mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Mes</span>
            </span>{" "}
            services
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            doloribus odio? Exercitationem, deleniti! Beatae, voluptatibus!
            Iusto, nihil quas repudiandae corrupti, qui id vero magni et
            accusamus dolorum ad velit modi?
          </p>
        </div>
        <div className=" grid justify-center gap-8 row-gap-10 lg:grid-cols-2 ">
          {services.map((serv) => (
            <div
              key={serv.id}
              className="shadow-2xl overflow-hidden max-w-md h-80 w-80 flex shadow-l bg-white flex-col justify-around  sm:mx-auto  sm:text-center rounded-xl"
            >
              <div className="pt-5">
                <h6 className="mb-3 text-xl font-bold leading-5">
                  {serv.title}
                </h6>
                <Image
                  className="rounded-full"
                  src={serv.picture}
                  alt={serv.title}
                  width={150}
                  height={150}
                />
              </div>
              <p
                className="flex items-center  text-sm h-full text-white  opacity-50
              bg-gradient-to-t from-yellow-900 via-yellow-800 to-white
              "
              >
                <p className="shadow-xl">{serv.info}</p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default YourService;

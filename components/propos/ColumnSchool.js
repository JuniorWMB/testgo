import React, { useState } from "react";
import { parcours } from "../../tools/tools";
import Whydigital from "./Whydigital";

const ColumnSchool = () => {
  const [toggle, setToggle] = useState(1);

  const previousText = () => {
    if (toggle === 1) {
      setToggle(toggle);
    } else {
      setToggle(toggle - 1);
    }
  };

  const nextText = () => {
    setToggle(toggle + 1);
    if (toggle === 3) {
      setToggle(toggle - 2);
    }
  };
  return (
    <div className=" w-full lg:absolute top-96 lg:flex h-5/6 ">
      <div className="bg-white shadow-lg text-yellow-700 overflow-hidden h-10 flex justify-center items-center lg:w-1/5 lg:absolute bottom-28">
        En quelques mots...
      </div>
      <div className="lg:w-96 flex flex-col lg:justify-center items-center lg:absolute -bottom-96 lg:rounded-sm right-32 px-4 lg:bg-yellow-600 h-[1200px]">
        {parcours.map((parcour, idx) => {
          return (
            <div
              key={idx}
              className="border bg-white rounded-md my-3 p-2 h-15 flex-col-reverse w-full lg:w-full "
            >
              <p className="text-yellow-800">{parcour.info}</p>
              <p className="text-gray-500">{parcour.date}</p>
            </div>
          );
        })}
        {/* <Whydigital /> */}
        <div className="flex flex-col">
          <div className="bg-yellow-600 w-full h-auto flex  items-center lg:bg-yellow-600 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={previousText}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {toggle === 1 && (
              <div className="w-full h-96 flex-col justify-center py-20">
                <p className="text-center mb-5 text-2xl">
                  {" "}
                  {" L'aspect humain"}
                </p>
                <p className=" text-center px-2">
                  {`  L'aspect financier n'est clairement pas ma source
                  de motivation numéro 1. Aujourd'hui,j'ai
                  décidé d'apporter mes diplômes/certifications, mon
                  expertise, mes compétences et mon expérience à échelle humaine
                  pour un épanouissement personnel plus grand!`}
                </p>
              </div>
            )}
            {toggle === 2 && (
              <div className="w-full h-96 flex-col justify-center py-20">
                <p className="text-center mb-5 text-2xl">{"L'aspect Test 2"}</p>
                <p className="text-center px-2">
                  {` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  "Deserunt inventore alias incidunt animi voluptas nesciunt
                  soluta excepturi earum neque sapiente corrupti unde labore
                  nemo fugit aperiam, enim rerum officia porro!"`}
                </p>
              </div>
            )}
            {toggle === 3 && (
              <div className="w-full h-96 flex-col justify-center py-20">
                <p className="text-center mb-5 text-2xl">
                  {`                  L'aspect Test 3
`}{" "}
                </p>
                <p className="text-center px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt inventore alias incidunt animi voluptas nesciunt
                  soluta excepturi earum neque sapiente corrupti unde labore
                  nemo fugit aperiam, enim rerum officia porro!
                </p>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={nextText}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className=" flex justify-center">
            <button className="border rounded-lg text-yellow-900 border-yellow-800 hover:bg-yellow-700 hover:text-white h-10 px-5 mb-10">
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnSchool;

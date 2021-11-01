import React from "react";
import Image from "next/image";
import pictureForm from "../../public/form_image.jpg";

const FormContact = () => {
  return (
    <div className="flex min-h-screen bg-white m-10 shadow-2xl h-3/4">
      {/* <div> */}
      <Image
        className="w-1/2 hidden"
        // className="w-1/2 hidden md:block h-auto border-green-800 border"
        src={pictureForm}
        width={450}
        height={990}
        priority
        // layout="responsive"
        alt="image digital"
      />
      {/* </div> */}
      <div className="bg-no-repeat bg-right bg-cover max-w-max max-h-8 h-12 overflow-hidden"></div>

      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className=" text-gray-800 text-3xl font-medium">
            Un projet en tête, parlons en.
          </h1>
          <h3 className="p-1 text-gray-700">
            Réponse rapide. Analyse gratuite.
          </h3>
        </div>
        <form action="#" className="p-0">
          <div className="mt-5">
            <label htmlFor="nom" className="sc-bqyKva ePvcBv">
              Nom/Marque...
            </label>
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Digital Web"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="email" className="sc-bqyKva ePvcBv">
              Email
            </label>
            <input
              type="email"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="monproject@digital.com"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="telephone" className="sc-bqyKva ePvcBv">
              Téléphone
            </label>
            <input
              type="tel"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Téléphone"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="telephone" className="sc-bqyKva ePvcBv">
              Projet
            </label>
            <textarea
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Quel est ton projet ?"
            />
          </div>

          <div className="mt-6 block p-5 text-sm md:font-sans  text-gray-800">
            <input type="checkbox" className="inline-block border-0  " />
            <span display="inline" className="">
              En envoyant votre accord sur les
              <a className="" href="/s/terms" target="_blank" data-test="Link">
                <span className="underline "> Termes et Conditions</span>{" "}
              </a>{" "}
              et{" "}
              <a
                className=""
                href="/s/privacy"
                target="_blank"
                data-test="Link"
              >
                <span className="underline">Privacy Policy</span>{" "}
              </a>
            </span>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Envoi ton projet !"
              className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
            />
          </div>
        </form>
        {/* <a className="" href="/login" data-test="Link">
            <span className="block  p-5 text-center text-gray-800  text-xs ">
              Already have an account?
            </span>
          </a> */}
      </div>
    </div>
  );
};

export default FormContact;

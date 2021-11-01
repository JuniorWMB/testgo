import React from "react";
import Link from "next/link";
import Image from "next/image";
import Consulting from "../../public/consulting4.jpg";

const Content = () => {
  return (
    <div className="px-4 py-16 mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <Image
            src={Consulting}
            height={2200}
            priority
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Tu es entrepreneur, blogueur, artiste, commerçant ou encore
            artisan...?{" "}
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">
              Tu sais que la présence numérique est devenu incontournable et les
              réseaux sociaux sont des outils puissants pour votre business,
              seulement vous ne savez pas par où commencer et comment faire… Pas
              de panique! C’est dans cette optique que Digital Eve Consulting
              est la pour vous proposer mon expertise digitale.
            </span>
          </p>
          <div className="flex items-center">
            <Link href="/contact" passHref>
              <button
                type="button"
                href="/contact"
                className="inline-flex bg-yellow-600 items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-yellow-900 focus:shadow-outline focus:outline-none"
              >
                Prendre Contact{" "}
              </button>
            </Link>

            <Link href="/">
              <a
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-yellow-800"
              >
                Mes services
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

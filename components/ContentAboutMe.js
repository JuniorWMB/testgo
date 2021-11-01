import React from "react";
import Link from "next/link";
import Image from "next/image";
import ConsultingPicture from "../public/womanbis.jpg";

const ContentAboutMe = () => {
  return (
    <div className="relative bg-yellow-600 bg-opacity-25 flex flex-col-reverse py-16 lg:py-0 md:flex place-content-center lg:flex-col">
      <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
        <div className="mb-0 flex place-items-center flex-col lg:max-w-lg lg:pr-8 xl:pr-6">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            A propos de moi
          </h2>
          <p className="mb-5 text-base text-gray-700 md:text-lg md:text-center">
            Je suis Eve. Consultante digitale, diplômée d’un bac +5 en école de
            commerce avec une double compétence dans le marketing et le digital.
            J’ai une expèrience de plus de 10 ans dans le digital avec des
            grandes marques du voyage, du luxe et du e-commerce. En parallèle,
            j’ai suivi et accompagné avec passion quelques entrepreneurs dans le
            cadre de la réalisation de leurs sites internet et/ou la conduite de
            leurs stratégies digitales en ligne. Aujourd’hui, je vous propose
            mes services pour vous développer sur le web. Également consultante
            en e-business, je vous partage des astuces pour développer votre
            entreprise! En savoir plus sur Eve (Rediriger vers la page qui suis
            je) OU Recrutez-moi (Rediriger vers la page contact).
          </p>
        </div>
      </div>
      <div className="inset-y-0 top-0 flex h-96  justify-center right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 mt-24 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute lg:mt-24 xl:px-0 xl:mt-24">
        <Image
          className="object-cover w-full h-96 rounded-full shadow-lg lg:rounded-full lg:shadow-none md:rounded-full lg:h-full "
          src={ConsultingPicture}
          alt=""
          height={400}
          width={400}
          placeholder="blur"
          objectFit="cover"
          priority
          objectPosition="10% 10% 10% 10%"
        />
      </div>
    </div>
  );
};

export default ContentAboutMe;

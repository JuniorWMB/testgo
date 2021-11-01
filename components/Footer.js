// import p from "next/p";
import { navigation } from "../tools/tools";
import Image from "next/image";
import Logo from "../public/logoeve.png";

export const Footer = () => {
  return (
    <div className=" bg-yellow-600 pb-12 mt-20">
      <div className="mx-auto container pt-20 lg:pt-10 flex flex-col items-center justify-center">
        <div className="h-56 w-56  overflow-hidden ">
          <Image
            src={Logo}
            alt="eve logo"
            width={600}
            height={600}
            // objectPosition="50% 50%"
            placeholder="blur"
            priority
          />
        </div>
        <div className="text-black flex flex-col md:items-center f-f-l pt-3">
          <h1 className="text-2xl font-black">Construire. Conseil. Aide.</h1>
          <div className="my-6 text-base text-color f-f-l">
            <div className="md:flex items-center">
              {navigation.map((nav) => (
                <a
                  href={nav.href}
                  key={nav.id}
                  className=" md:mr-6 cursor-pointer pt-4 lg:py-0 hover:text-white"
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>
          <div className="text-sm text-color mb-10 f-f-l">
            <p> © 2021 HopeWeb. Tous droit réservé</p>
          </div>
        </div>
        <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
        <div className="flex justify-between items-center pt-12">
          <div className="mr-4"></div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation } from "../tools/tools";
import Logo from "../public/logoeve.png";

const Navbar = () => {
  return (
    <div className=" bg-white h-32 border-b-2 border-gray-200">
      <Popover>
        <div className="pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-black hover:bg-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div
              className="hidden md:flex justify-between content-center 
            w-full flex-row mt-10 md:ml-10 md:pr-4 md:space-x-8"
            >
              <div>
                <Image
                  src={Logo}
                  width={220}
                  height={220}
                  alt="logo eve "
                  quality="100"
                />
              </div>
              <div className=" w-full flex place-content-end items-center">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium mr-6 text-gray-500 hover:text-yellow-600"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-20 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <Image
                    src={Logo}
                    width={120}
                    height={120}
                    alt="logo eve "
                    quality="100"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-black hover:bg-none  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-600">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700  hover:bg-yellow-50 hover:text-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Navbar;

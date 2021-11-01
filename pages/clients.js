import React from "react";
import Link from "next/link";
import Image from "next/image";
import Error from "../public/error.png";

const clients = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  text-white min-h-screen flex items-center h-full">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        {/* <div className="w-full md:w-5/12 text-center p-4">
          <Image src={Error} alt="page not found" />
        </div> */}
        <div className="w-full md:w-7/12 text-center md:text-left p-4">
          <div className="text-6xl font-medium">404</div>
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page his in contruction.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <Link href="/" className="border border-white rounded p-4">
            <a className="border border-white rounded p-4">Go Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default clients;

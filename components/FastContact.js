import React from "react";
import Link from "next/link";

const FastContact = () => {
  return (
    <div className=" w-full h-20 p-2">
      <div className="border-gray-400 flex justify-end overflow-hidden border h-full rounded-xl">
        <Link
          href="/contact"
          passHref
          className="
        border border-green-800
        "
        >
          <button className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FastContact;

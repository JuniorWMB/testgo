import React from "react";

const FormulaireV2 = () => {
  return (
    <div className="w-full h-auto bg-yellow-600 bg-opacity-25 p-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold uppercase">Un projet ?</h1>
        <p>
          {`Tu veux promouvoir ta marque sur le net ou les réseaux sociaux, ou tu
          as une autre questions, n'hésites pas à me contacter.`}
        </p>
      </div>
      <form
        action=""
        className="flex flex-col items-center px-2 lg:border border-green-800 lg:flex-col"
      >
        <div className="lg: flex flex-row">
          <input
            type="text"
            placeholder="Nom/Marque ..."
            className="w-full h-12 mt-5 p-2 rounded-lg shadow lg:w-72"
          />
          <input
            type="email"
            placeholder="Email ..."
            className="w-full h-12 mt-5 p-2 rounded-lg shadow lg:mx-10 lg:w-72"
          />
          <input
            type="tel"
            placeholder="Téléphone ..."
            className="w-full h-12 mt-5 p-2 rounded-lg shadow lg:w-72"
          />
        </div>
        <div className="mt-5 w-full">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message ..."
            className="p-2 rounded-lg shadow w-full"
          />
        </div>
        <button className="text-white w-full h-12 mt-5 p-2 rounded bg-yellow-600  shadow hover:bg-yellow-900 ">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default FormulaireV2;

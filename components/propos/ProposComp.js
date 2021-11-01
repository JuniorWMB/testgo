import React from "react";
import ColumnSchool from "./ColumnSchool";
import Content from "./Content";
import Services from "./Services";
import Whydigital from "./Whydigital";

const ProposComp = () => {
  return (
    <div className="w-full h-auto">
      <div className=" w-full">
        <Services />
        <ColumnSchool />
        <Whydigital />
        <Content />
      </div>
    </div>
  );
};

export default ProposComp;

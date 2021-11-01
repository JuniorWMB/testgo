import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import keyboard from "../../public/keyboard.jpg";
import ColumnSchool from "./ColumnSchool";
import Whydigital from "./Whydigital";

const Services = () => {
  const [box1, setBox1] = useState(false);
  const [box2, setBox2] = useState(false);
  const [box3, setBox3] = useState(false);
  const [box4, setBox4] = useState(false);
  return (
    <div className="lg:relative">
      <Image
        src={keyboard}
        priority
        alt="clavier bureau"
        layout="responsive"
        className="opacity-50"
      />
    </div>
  );
};

export default Services;

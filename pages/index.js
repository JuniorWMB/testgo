import Head from "next/head";
import Image from "next/image";
import ContentAboutMe from "../components/ContentAboutMe";
import FastContact from "../components/FastContact";
import FormulaireV2 from "../components/FormulaireV2";
import Hero from "../components/Hero";
import HeroBanner from "../components/HeroBanner";
import YourService from "../components/YourService";
import Consulting from "../public/consulting.jpg";

export default function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      <Hero
        title="Digital Marketer,je t'aide à promouvoir  ta marque sur le web."
        text=" Tu veux promouvoir ta marque sur le net ou les reseaux sociaux, ou tu as une autre questions n'hésites pas à me contacter."
        action="Go"
        picture={Consulting}
      />
      <ContentAboutMe />
      <YourService />
      {/* <FastContact /> */}
      <FormulaireV2 />
    </>
  );
}

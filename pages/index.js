import Head from "next/head";
import Execution from "../components/Execution";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/global/Header";
import Headquatered from "../components/Headquatered";
import Hero from "../components/Hero";
import Members from "../components/Members";
import Opportunities from "../components/Opportunities";
import Team from "../components/Team";
import Theater from "../components/Theater";
import TheaterAnimated from "../components/TheaterAnimated";

export default function Home() {
  return (
    <div className="bg-global">
      <Head></Head>
      <Hero />
      {/* <Theater /> */}
      <div className="v2 -mt-[5.5rem] xl:-mt-14">
        <TheaterAnimated />
        <Execution />
        <Experience />
      </div>
      <Team />
      <Headquatered />
      <Opportunities />
      <Footer />
    </div>
  );
}

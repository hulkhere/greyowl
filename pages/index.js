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
    <div className="test">
      <Head></Head>
      <Header />
      <Hero />
      <Theater />
      {/* <TheaterAnimated /> */}
      <div className="v2">
        <Execution />
        <Experience />
      </div>
      <Team />
      <Members />
      <Headquatered />
      <Opportunities />
      <Footer />
    </div>
  );
}

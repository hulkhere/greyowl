import Head from "next/head";
import Execution from "../components/Execution";
import Experience from "../components/Experience";
import Header from "../components/global/Header";
import Headquatered from "../components/Headquatered";
import Hero from "../components/Hero";
import Members from "../components/Members";
import Opportunities from "../components/Opportunities";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="test">
      <Head></Head>
      <Header />
      <Hero />
      <Execution />
      <Experience />
      <Team />
      <Headquatered />
      <Opportunities />
      <Members />
    </div>
  );
}

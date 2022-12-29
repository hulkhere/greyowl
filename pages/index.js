import Head from "next/head";
import Execution from "../components/Execution";
import Experience from "../components/Experience";
import Header from "../components/global/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <div className="bg-black">
        <Header />
        <Hero />
        <Execution />
        <Experience />
      </div>
    </div>
  );
}

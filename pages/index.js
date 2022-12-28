import Head from "next/head";
import Header from "../components/global/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head></Head>
      <Header />
      <Hero />
    </div>
  );
}

import React, { useState } from "react";
import Logo from "../../components/svg/Logo";
import HamOpen from "../svg/HamOpen";

// const nav = [
//   {
//     title: "About us",
//     link: "",
//   },
//   {
//     title: "For Filmmakers",
//     link: "",
//   },
//   {
//     title: "For Viewers",
//     link: "",
//   },
//   {
//     title: "Pricing",
//     link: "",
//   },
// ];

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="w-full p-6 sm:p-10 lg:p-8 lg:px-24 flex items-center justify-between">
      <div className="w-[140px] h-[38px] lg:w-[238px] lg:h-[65px]">
        <Logo />
      </div>
      {/* <div className="gap-x-8 hidden lg:flex">
        {nav.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="text-white text-base font-semibold"
          >
            {item.title}
          </a>
        ))}
        the given div is of length wfull p-1 items-center justify-between {items.title}
          
      </div> */}
      <button className="bg-[#CC5900] px-4 p-2 lg:p-3 lg:px-5 rounded-lg text-white">
        Get in touch
      </button>
      {/* <button className="lg:hidden">
        <HamOpen />
      </button> */}
    </main>
  );
}

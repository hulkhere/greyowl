import React, { useState } from "react";
import Logo from "../../components/svg/Logo";

const nav = [
  {
    title: "About us",
    link: "",
  },
  {
    title: "For Filmmakers",
    link: "",
  },
  {
    title: "For Viewers",
    link: "",
  },
  {
    title: "Pricing",
    link: "",
  },
];

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <main className="w-full p-8 sm:p-10 lg:p-10 flex items-center justify-between">
      <Logo width="140" height="39" />
      <div className="flex gap-x-8">
        {nav.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="text-white text-base font-semibold"
          >
            {item.title}
          </a>
        ))}
      </div>
      <button className="bg-[#CC5900] px-4 p-3 rounded-lg text-white">
        Get in touch
      </button>
    </main>
  );
}

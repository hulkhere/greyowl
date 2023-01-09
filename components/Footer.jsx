import React from "react";
import LinkedinLogo from "./svg/Linkedinlogo";
import Logo from "./svg/Logo";
import TwitterLogo from "./svg/Twitterlogo";
import FacebookLogo from "./svg/Facebooklogo";
import Image from "next/image";
import DesktopFooter from "../public/assets/images/tickets/desktop-footer.png";
import MobileFooter from "../public/assets/images/tickets/mobile-footer.png";
import FooterLogo from "./svg/FooterLogo";

export default function Footer() {
  return (
    <>
      <main className="footer-gradient">
        <div className="w-full justify-center items-center flex flex-col gap-y-8 py-14">
          <div className="w-[327px] h-[89.42px] lg:w-[362px] lg:h-[99px]">
            <FooterLogo />
          </div>
          <div className="flex items-center gap-x-6">
            <a href="">
              <TwitterLogo />
            </a>
            <a href="">
              <LinkedinLogo />
            </a>
            <a href="">
              <FacebookLogo />
            </a>
          </div>
          <div className="text-base text-white font-normal">
            © 2023 GreyOwl. All rights reserved.
          </div>
        </div>
        <div className="w-full h-full lg:hidden">
          <Image src={MobileFooter} alt="FooterDesktop" />
        </div>
        <div className="w-full h-full mt-20 hidden lg:block">
          <Image src={DesktopFooter} alt="FooterDesktop" />
        </div>
      </main>
    </>
  );
}

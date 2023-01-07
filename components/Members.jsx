import React from "react";
import BehanceLogo from "./svg/BehanceLogo";
import MembersArrow from "./svg/Membersarrow";
import TwitterLogo from "./svg/Twitterlogo";
import LinkedinLogo from "./svg/Linkedinlogo";
import Headquatered from "./Headquatered";

export default function Members() {
  return (
    <main className="w-full justify-center flex flex-col items-center gap-y-8 gap-x-16 lg:flex-row py-6 lg:py-20">
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between lg:pb-5 lg:pt-1">
            <div className="text-white text-3xl font-semibold">
              Sarika Bondre
            </div>
            <MembersArrow />
          </div>
          <div className="text-2xl font-semibold">Co-Founder & Director</div>
          <div className="text-sm lg:text-lg max-w-xs">
            Sarika has over 25 years of experience in handling operationally
            complex projects in technology & finance domains. Her expertise is
            capped with a Gold Medal in film-making from Whistling Woods
            International.
          </div>
          <div className="flex items-center gap-x-4 mt-3 mb-2">
            <a href="">
              <TwitterLogo />
            </a>
            <a href="">
              <LinkedinLogo />
            </a>
            <a href="">
              <BehanceLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between lg:pb-5 lg:pt-1">
            <div className="text-white text-3xl font-semibold">
              Anurag Gupta
            </div>
            <MembersArrow />
          </div>
          <div className="text-2xl font-semibold">Co-Founder & Director</div>
          <div className="text-sm lg:text-lg max-w-xs">
            Anurag is a serial entrepreneur and a pioneer in micro-finance. He
            envisioned the Banking Correspondent framework in India (Zero Mass
            Foundation) and also created the country&apos;s first mobile payment
            platform (mCheck).
          </div>
          <div className="flex items-center gap-x-4 mt-3 mb-2">
            <a href="">
              <TwitterLogo />
            </a>
            <a href="">
              <LinkedinLogo />
            </a>
            <a href="">
              <BehanceLogo />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between lg:pb-5 lg:pt-1">
            <div className="text-white text-3xl font-semibold">
              Gautam Sikhnis
            </div>
            <MembersArrow />
          </div>
          <div className="text-2xl font-semibold">Co-Founder & Director</div>
          <div className="text-sm lg:text-lg max-w-xs">
            Gautam has over 25 years experience in entrepreneurship, media &
            film. He founded Palador Pictures (India&apos;s largest World Cinema
            Platform) and produced over 500 ad/ corporate films for leading
            blue-chip brands.
          </div>
          <div className="flex items-center gap-x-4 mt-3 mb-2">
            <a href="">
              <TwitterLogo />
            </a>
            <a href="">
              <LinkedinLogo />
            </a>
            <a href="">
              <BehanceLogo />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

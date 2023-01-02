import React from "react";
import MembersArrow from "./svg/Membersarrow";

export default function Members() {
  return (
    <main className="flex flex-col gap-y-4 gap-x-4 lg:flex-row py-20">
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
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
        </div>
      </div>
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
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
        </div>
      </div>{" "}
      <div className="card">
        <div className="text-white content flex flex-col gap-y-1">
          <div className="flex items-center justify-between">
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
        </div>
      </div>
    </main>
  );
}

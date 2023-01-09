import React from "react";
import CancelLogo from "../svg/CancelLogo"


export default function Inputs() {
  return (
    <>
      <main className="flex flex-col gap-y-8 pt-14">
        <div className="flex items-center justify-end">
          <a className="w-[28px] h-[21px] lg:w-14 lg:h-10" href="/">
            <CancelLogo />
          </a>
        </div>
        <div className="flex gap-x-10">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-white text-sm font-semibold">First name *</h1>
            <input
              className="placeholder:text-[#667085] p-3.5 pr-20 outline-none text-lg font-normal rounded-lg"
              type="name"
              placeholder="First name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-white text-sm font-semibold">Last name *</h1>
            <input
              className="placeholder:text-[#667085] p-3.5 pr-20 outline-none text-lg font-normal rounded-lg"
              type="name"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-white text-sm font-semibold">Email *</h1>
          <input
            className="w-full placeholder:text-[#667085] p-3.5 outline-none text-lg font-normal rounded-lg"
            type="email"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <h1 className="text-white text-sm font-semibold mb-1.5">
            Phone number
          </h1>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="text-base h-full rounded-md border-transparent bg-transparent outline-none px-2"
              >
                <option>US</option>
                <option>IND</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              className="pl-20 w-full placeholder:text-[#667085] p-3.5 outline-none text-lg font-normal rounded-lg"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-white text-sm font-semibold">Message</h1>
          <input
            className="placeholder:text-[#667085] p-3.5 pr-20 py-12 outline-none text-lg font-normal rounded-lg"
            type="name"
            placeholder=""
          />
        </div>
        <button className="w-full py-3 rounded-lg bg-[#cc5900] text-white hover:bg-white hover:text-[#cc5900] transition-all text-lg font-semibold">
          Send message
        </button>
      </main>
    </>
  );
}

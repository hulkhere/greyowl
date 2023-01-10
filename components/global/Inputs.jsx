import React, { useState } from "react";
import CancelLogo from "../svg/CancelLogo";
import Link from "next/link";
import axios from "axios";

export default function Inputs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [textarea, setTextarea] = useState("");
  const [button, setButton] = useState(false);
  const [message, setMessage] = useState("");
  const [messageVisibility, setMessageVisibility] = useState("hidden");

  console.log(mail);

  function handleSubmit() {
    const regEx =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regEx.test(mail)) {
      axios
        .post("/api/waitlist", {
          firstName: firstName,
          lastName: lastName,
          email: mail,
          phoneNumber: number,
          message: textarea,
        })
        .then(() => {
          console.log("success");
        })
        .catch((err) => {
          console.log(err);
        });
      setMessageVisibility("hidden");
    } else {
      setMessageVisibility("block");
      setMessage("Enter an appropriate email");
    }
  }

  return (
    <>
      <main className="flex flex-col gap-y-4 lg:gap-y-8 lg:pt-14">
        <div className="flex items-center justify-end">
          <Link href="/">
            <div className="w-[28px] h-[21px] lg:w-14 lg:h-10 cursor-pointer hidden lg:block">
              <CancelLogo />
            </div>
          </Link>
        </div>
        <div className="flex gap-x-5 lg:gap-x-10">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-white text-sm font-semibold">First name *</h1>
            <input
              className="w-40 pl-2 py-2 lg:w-max capitalize placeholder:text-[#667085] lg:p-3.5 lg:pr-20 outline-none text-lg font-normal rounded-lg"
              type="name"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <h1 className="text-sm text-[#eed600] hidden">
              Don’t forget to fill this
            </h1>
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-white text-sm font-semibold">Last name *</h1>
            <input
              className="w-40 py-2 pl-2 lg:w-max capitalize placeholder:text-[#667085] lg:p-3.5 lg:pr-20 outline-none text-lg font-normal rounded-lg"
              type="name"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <h1 className="text-sm text-[#eed600] hidden">
              Don’t forget to fill this
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-white text-sm font-semibold">Email *</h1>
          <input
            className="w-full placeholder:text-[#667085] p-3.5 outline-none text-lg font-normal rounded-lg"
            type="email"
            placeholder="you@company.com"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <h1 className={`text-sm text-[#eed600] ${messageVisibility}`}>
            {message}
          </h1>
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
              type="tel"
              name="phone-number"
              id="phone-number"
              className="pl-20 w-full placeholder:text-[#667085] p-3.5 outline-none text-lg font-normal rounded-lg"
              placeholder="+1 (555) 987-6543"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-white text-sm font-semibold">Message</h1>
          <textarea
            className="placeholder:text-[#667085] outline-none text-lg font-normal rounded-lg w-full h-36 pl-2 pt-2"
            placeholder="What’s on your mind?"
            onChange={(e) => setTextarea(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full py-3 rounded-lg bg-[#cc5900] text-white hover:bg-white hover:text-[#cc5900] transition-all text-lg font-semibold"
        >
          Send message
        </button>
      </main>
    </>
  );
}

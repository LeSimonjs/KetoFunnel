import React from "react";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const subscribeMe = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: email }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    const { error, message } = await res.json();
    if (error) {
      setError(error);
    } else {
      setSuccess(message);
    }
  };

  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <div className="bg-gradient-to-b from-indigo-100">
      <div className="p-6 mb-20 container md:w-2/3 xl:w-auto mx-auto  flex flex-col xl:items-stretch justify-between xl:flex-row">
        <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
          <img
            src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
            alt="Envelope with a newsletter"
            role="img"
            className="h-full xl:w-full lg:w-1/2 w-full"
          />
        </div>
        <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">
            ONE STEP LEFT! :-)
          </h1>
          <p className="text-base leading-normal text-gray-600 text-center xl:text-left">
            To which e-mail address should we send the cookbook?
          </p>
          <form
            className="mt-8 md:flex justify-center md:gap-2"
            onSubmit={subscribeMe}
          >
            <input
              onChange={changeEmail}
              aria-label="Email for newsletter"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              required
              className="bg-gray-100 text-base leading-none text-gray-800 w-full md:w-1/2 p-4 grid place-items-center border rounded-md focus:outline-none shadow-lg shadow-indigo-500/50 border border-indigo-700"
            />
            <button
              className="w-full md:w-auto bg-indigo-600 text-white px-8 py-4 border rounded-md hover:bg-indigo-700 grid place-items-center font-semibold mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 shadow-lg shadow-indigo-500/50"
              type="submit"
            >
              SEND NOW
            </button>
          </form>
          {success ? (
            <span className="flex items-center text-sm font-bold text-green-700">
              {success}
            </span>
          ) : (
            <span className="flex items-center text-sm font-bold text-red-800">
              {error}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

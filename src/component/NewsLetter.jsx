import React from "react";

export default function NewsLetter() {
  return (
    <div>
      <div className="w-full bg-[#2699fb] p-4 ">
        <div className="md:flex justify-between max-w-[1200px] mx-auto py-[70px] items-center">
          <div className="mt-4 text-center">
            <h1 className="text-[18px] md:text-[30px] font-bold text-white">
              Want to learn Latest IT Skills?
            </h1>
            <span className="text-white">
              Sign Up to our NewsLetter to Stay Upadted.
            </span>
          </div>
          <div className="mt-8 md:text-left text-center">
            <input
              className="p-3 mr-2  rounded text-slate-500 "
              type="text"
              placeholder="Email"
            />
            <button className="bg-black text-white p-3 rounded">
              Notify Me
            </button>
            <br />
            <p className="text-white mt-3">
              We care about the protection of your data. Read our
              <br />{" "}
              <a href="/" className="text-black">
                {" "}
                Privicy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

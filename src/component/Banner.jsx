import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <div>
      <div className="bg-[#2699fb] w-full  py-[100px]">
        <div className="max-w-[1200px] mx-auto text-center md:my-[40px] my-[20px]">
          <div className="md:text-3xl text-xl font-bold md:p-[24px] p-[10px]">
            Learn With Us.
          </div>
          <h1 className="md:text-6xl text-4xl font-bold md:p-[4px] p-[10px] text-white">
            Grow With Us.
          </h1>
          <div className="md:text-5xl text-3xl font-bold  text-white md:p-[24px] p-[10px]">
            Learn
            <Typed
              className="pl-3"
              strings={[
                "Web Development",
                "Digital Marketing",
                "Ethical Hacking",
              ]}
              loop={true}
              typeSpeed={100}
              backSpeed={100}
            />
          </div>
          <button className="bg-black text-white p-3 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import laptop from "../assets/laptop.jpg";

export default function Experts() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto md:grid grid-cols-2 my-[40px]">
        <div className="col-span-1 md:w-[80%] mt-10 text-center ">
          <img src={laptop} alt="Laptop" />
        </div>
        <div className="col-span-1 flex flex-col justify-center md:p-1 p-6 ">
          <h1 className="text-[#00df9a] mt-6"> LEARN FROM EXPERTS</h1>
          <p className="my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button className=" w-[200px] bg-black text-white p-3 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

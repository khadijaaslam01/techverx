import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="bg-[#2699fb] p-4">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[10px]">
          <div className="text-3xl font-bold">Techverx</div>
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-white text-2xl md:hidden block"
            />
          )}

          <ul className=" hidden md:flex text-white gap-10">
            <li>Home</li>
            <li>Company</li>
            <li>About</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
          {/* responsive menu */}
          <ul
            className={` duration-300 md:hidden  w-[60%] text-white fixed h-screen bg-[#000000] text-center ${
              toggle ? "left-0" : "left-[-100%]"
            } top-0`}
          >
            <li className="p-5">Home</li>
            <li className="p-5">Company</li>
            <li className="p-5">About</li>
            <li className="p-5">Resources</li>
            <li className="p-5">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

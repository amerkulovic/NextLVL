import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2E43] flex flex-wrap justify-center">
      <div className="flex flex-col items-center">
        <ul className="flex flex-row text-xl text-[#FFD523]">
          <li className="px-4 my-4 font-bold">About</li>
          <li className="px-4 my-4 font-bold">Trainers</li>
          <li className="px-4 my-4 font-bold">Exercises</li>
          <li className="px-4 my-4 font-bold">Shop</li>
          <li className="px-4 my-4 font-bold">Contact</li>
        </ul>
        <ul className="flex flex-row text-xl text-[#FFD523]">
          <li className="px-4 my-4 font-bold">NextLVL@gmail.com</li>
          <li className="px-4 my-4 font-bold">123 Level Up Street, Chicago IL</li>
          <li className="px-4 my-4 font-bold">(555)-555-5555</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

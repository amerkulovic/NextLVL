import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2E43] flex flex-wrap justify-center py-5">
      <div className="flex flex-col items-center">
        <ul className="flex flex-row text-xl text-[#FFD523] font-extralight">
          <li className="px-4 my-4 max-sm:my-1">About</li>
          <li className="px-4 my-4 max-sm:my-1">Trainers</li>
          <li className="px-4 my-4 max-sm:my-1">Exercises</li>
          <li className="px-4 my-4 max-sm:my-1">Shop</li>
          <li className="px-4 my-4 max-sm:my-1">Contact</li>
        </ul>
        <ul className="flex flex-row max-sm:flex-col text-xl text-[#FFD523] font-extralight">
          <li className="px-4 my-4">NextLVL@gmail.com</li>
          <li className="px-4 my-4">123 Level Up Street, Chicago IL</li>
          <li className="px-4 my-4">(555)-555-5555</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

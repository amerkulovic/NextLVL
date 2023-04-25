import React from "react";
import Logo from "../../images/Logo.png";
import ContactFooter from "./ContactFooter";
import FooterSection from "./FooterSection";

const Footer = () => {
  return (
    <>
      <ContactFooter />
      <footer className="bg-[#2C2E43] flex flex-wrap justify-between items-center py-5">
        <section className="flex flex-row">
          <FooterSection header="Discover" item1="About" item2="Trainers" item3="Exercises" item4="Shop" item5="Contact" />
          <FooterSection header="Contact" item1="NextLVL@gmail.com" item2="123 Level Up Street, Chicago IL" item3="(555)-555-5555" />
        </section>
        <div className="flex flex-col items-center mr-10">
          <img src={Logo} className="h-20 w-90 border-2 border-black" />
          <h1 className="text-white text-xl mt-1" style={{ fontFamily: "Bruno Ace SC" }}>
            Fitness
          </h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;

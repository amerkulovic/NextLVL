import React from "react";
import NavContainer from "../NavComponents/NavContainer";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Auth from "../../utils/auth";
import MobileNav from "../NavComponents/MobileNav";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="absolute z-10 w-full">
      <div className="flex flex-row justify-between pl-5 mt-4">
        <Link to="/">
          <div className="flex flex-col items-center">
            <img src={Logo} className="h-20 w-90 border-2 border-black" />
            <h1 className="text-white text-xl mt-1" style={{ fontFamily: "Bruno Ace SC" }}>
              Fitness
            </h1>
          </div>
        </Link>
        <MobileNav />
        <NavContainer />
      </div>
    </header>
  );
};

export default Header;

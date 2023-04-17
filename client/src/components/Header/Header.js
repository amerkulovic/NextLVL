import React from "react";
import NavContainer from "../NavComponents/NavContainer";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="absolute z-10 w-full">
      <div className="flex flex-row justify-between items-center pl-5 mt-4">
        <h1 className="text-white font-bold text-4xl">Next LVL</h1>
        <NavContainer />
      </div>
    </header>
  );
};

export default Header;

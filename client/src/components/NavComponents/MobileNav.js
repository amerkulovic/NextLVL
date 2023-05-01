import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <AiOutlineMenu className="hamburger" size="40px" color="#FFFFFF" onClick={() => setOpen(!open)} />;
  const closeIcon = <AiOutlineClose className="hamburger mb-2" size="40px" color="#FFFFFF" onClick={() => setOpen(!open)} />;

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="hidden max-lg:flex max-lg:flex-col max-lg:items-end cursor-pointer mt-5 mr-5">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNav;

import { Link } from "react-router-dom";

const NavLinks = (props) => {
  let styling = "mx-1 my-4 max-lg:my-0 p-2";

  props.isMobile ? (styling += "py-4 p-7 bg-[#FFD523] text-black text-center border border-yellow-800 border-opacity-40 right-side-animation") : (styling = "mx-1 my-4 p-2");

  return (
    <>
      <ul className="flex flex-row max-lg:flex-col text-xl text-white font-extralight" style={{ fontFamily: "Bruno Ace SC" }}>
        <Link to="/about">
          <li className={styling} onClick={() => props.isMobile && props.closeMobileMenu()}>
            About
          </li>
        </Link>
        <Link to="/trainers">
          <li className={styling} onClick={() => props.isMobile && props.closeMobileMenu()}>
            Trainers
          </li>
        </Link>
        <Link to="/exercises">
          <li className={styling} onClick={() => props.isMobile && props.closeMobileMenu()}>
            Exercises
          </li>
        </Link>
        <Link to="/shop">
          <li className={styling} onClick={() => props.isMobile && props.closeMobileMenu()}>
            Shop
          </li>
        </Link>
        <Link to="/contact">
          <li className={styling} onClick={() => props.isMobile && props.closeMobileMenu()}>
            Contact
          </li>
        </Link>
      </ul>
    </>
  );
};

export default NavLinks;

import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="flex flex-row text-xl text-[#FFD523] font-extralight">
        <Link to="/about">
          <li className="px-4 my-4">About</li>
        </Link>
        <li className="px-4 my-4">Trainers</li>
        <li className="px-4 my-4">Exercises</li>
        <li className="px-4 my-4">Shop</li>
        <li className="px-4 my-4">Contact</li>
      </ul>
    </>
  );
};

export default NavLinks;

import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="flex flex-row text-xl text-white font-extralight" style={{ fontFamily: "Bruno Ace SC" }}>
        <Link to="/about">
          <li className="mx-1 my-4 p-2">About</li>
        </Link>
        <Link to="/trainers">
          <li className="mx-1 my-4 p-2">Trainers</li>
        </Link>
        <Link to="/exercises">
          <li className="mx-1 my-4 p-2">Exercises</li>
        </Link>
        <Link to="/shop">
          <li className="mx-1 my-4 p-2">Shop</li>
        </Link>
        <li className="ml-1 my-4 p-2">Contact</li>
      </ul>
    </>
  );
};

export default NavLinks;

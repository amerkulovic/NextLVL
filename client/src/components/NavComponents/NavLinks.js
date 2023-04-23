import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <ul className="flex flex-row text-xl text-black font-extralight" style={{ fontFamily: "Bruno Ace SC" }}>
        <Link to="/about">
          <li className="mx-1 my-4 p-2 border-2 border-black bg-[#FFD523]">About</li>
        </Link>
        <li className="mx-1 my-4 p-2 border-2 border-black bg-[#FFD523]">Trainers</li>
        <li className="mx-1 my-4 p-2 border-2 border-black bg-[#FFD523]">Exercises</li>
        <li className="mx-1 my-4 p-2 border-2 border-black bg-[#FFD523]">Shop</li>
        <li className="ml-1 my-4 p-2 border-2 border-black bg-[#FFD523]">Contact</li>
      </ul>
    </>
  );
};

export default NavLinks;

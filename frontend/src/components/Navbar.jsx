import { useState } from "react";
import { close, rebekko, rebekko1, menu, user} from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full z-50 fixed mt-0 flex px-8 py-3 justify-center backdrop-blur-lg  items-center navbar ">
      <Link to="/"><img src={rebekko} alt="hoobank" className="w-[270px] h-[60px]" /></Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins hover:text-sky-900 font-semibold cursor-pointer text-[16px] ${
              active === nav.title ? "text-sky-900" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:flex hidden justify-end w-[100px] h-[50px]">
        <Link to="/register">
      <div className= "sm:flex hidden  w-[50px] h-[50px] cursor-pointer hover:bg-blue-200 bg-blue-100 rounded-full">
        <img className = "w-[100%] h-[100%] " src={user} alt="" />
      </div>
      </Link>
      </div>
      

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-orange-600" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

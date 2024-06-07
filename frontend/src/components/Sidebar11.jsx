import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { PiSignOutBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { PiMoneyWavyBold } from "react-icons/pi";
import { BiCandles } from "react-icons/bi";
import { createElement } from "react";
import { useFirebase } from '../context/Firebase';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const firebase =  useFirebase();
  const handleHome = () =>{
    navigate("/");
  }
  const handleSignOut = async () => {
    try {
      await firebase.signOutUser();
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  const menus = [
    { name: "dashboard", link: "userdash", icon: MdOutlineDashboard },
    { name: "cash", link: "cash", icon: PiMoneyWavyBold },
    { name: "derivative", link: "derivative", icon: BiCandles },
    { name: "upload", link: "upload", icon: BiCandles },
  ];

  return (
    <section className="flex flex-col h-screen md:flex-row">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 fixed md:relative z-20 md:z-0`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                style={{ zIndex: 50 }} // Ensure the tooltip has a higher z-index
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          {/* Hardcoded buttons */}
          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleHome}
              className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md text-gray-100"
            >
              <div><GoHome className="text-[20px]"/></div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Back to Home
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                 // Ensure the tooltip has a higher z-index
              >
                Back to Home
              </h2>
            </button>
            <button
              onClick={handleSignOut}
              className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md text-gray-100"
            >
              <div><PiSignOutBold className="text-[20px]"/></div>
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                Sign Out
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                style={{ zIndex: 50 }} // Ensure the tooltip has a higher z-index
              >
                Sign Out
              </h2>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-grow duration-500 ${
          open ? "ml-72 md:ml-0" : "ml-16 md:ml-0"
        }`}
      ></div>
    </section>
  );
};

export default Sidebar;

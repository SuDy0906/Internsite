import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { SiFuturelearn, SiOpenaccess } from 'react-icons/si';
import { FaHistory } from 'react-icons/fa';
import HamburgerButton from './HamburgerMenuButton/HamburgerButton';
import { facebook } from '../assets';
import { FaMoneyBillWave } from "react-icons/fa";
import { LuCandlestickChart } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { useFirebase } from '../context/Firebase';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hovered, setHovered] = useState(false);
  const location = useLocation();
  const firebase = useFirebase();
  const navigate = useNavigate();

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', icon: <AiFillPieChart /> },
    { title: 'Back to Home', path: '/', icon: <SiFuturelearn /> },
    { title: 'Cash', path: '/cash', icon: <FaMoneyBillWave/> },
    { title: 'Derivative', path: '/derivative', icon: <LuCandlestickChart /> },
  ];

  const handleSignOut = async () => {
    try {
      await firebase.signOutUser();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            <img src={facebook} alt='' className='pl-2' />
            {open && (
              <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                Rebekko
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className='text-2xl'>{menu.icon}</span>
                <span
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
          {/* Sign Out Button */}
          <Link onClick={handleSignOut}>
            <li className='flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mt-2'>
              <span className='text-2xl'>
                <FaSignOutAlt />
              </span>
              <span
                className={`${
                  !open && 'hidden'
                } origin-left duration-300 hover:block`}
              >
                Sign Out
              </span>
            </li>
          </Link>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className='pt-3 mt-[100px]'>
        <HamburgerButton setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
      <div className='sm:hidden'>
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index} onClick={() => setMobileMenu(false)}>
              <span
                className={`${
                  location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
          {/* Sign Out Button */}
          <button onClick={handleSignOut}>
            <span
              className={`${
                mobileMenu && 'block'
              } bg-gray-200 dark:bg-gray-700 p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
            >
              Sign Out
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

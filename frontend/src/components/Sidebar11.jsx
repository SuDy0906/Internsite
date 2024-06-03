import React, { useState } from 'react';


function Sidebar11() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className={`body-area ${showNav ? 'pl-64' : 'pl-0'}`}>
      <header className={`header ${showNav ? 'pl-64' : 'pl-0'} flex justify-between items-center p-4 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-gray-600`}>
        <div className="header_toggle">
          <i
            className={`bi ${showNav ? 'bi-x' : 'bi-list'} text-2xl cursor-pointer`}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <div className="header_img">
          <img
            src="https://reqres.in/img/faces/5-image.jpg"
            alt="Clue Mediator"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
      <div className={`l-navbar fixed top-0 left-0 h-full bg-gray-100 dark:bg-slate-800 ${showNav ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300`}>
        <nav className="nav flex flex-col justify-between h-full p-4">
          <div>
            <a href="https://cluemediator.com" target="_blank" className="nav_logo flex items-center mb-6">
              <i className='bi bi-alexa text-2xl' />
              <span className="ml-3 text-xl font-medium dark:text-white">Clue Mediator</span>
            </a>
            <div className="nav_list">
              <a href="https://cluemediator.com" target="_blank" className="nav_link flex items-center mb-4 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500">
                <i className='bi bi-people text-xl' />
                <span className="ml-3 text-lg">Users</span>
              </a>
              <a href="https://cluemediator.com" target="_blank" className="nav_link flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-500">
                <i className='bi bi-person-check text-xl' />
                <span className="ml-3 text-lg">Role</span>
              </a>
            </div>
          </div>
          <a href="https://cluemediator.com" target="_blank" className="nav_link flex items-center text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-500">
            <i className='bi bi-box-arrow-left text-xl' />
            <span className="ml-3 text-lg">SignOut</span>
          </a>
        </nav>
      </div>
     </div> 
  );
}

export default Sidebar11;

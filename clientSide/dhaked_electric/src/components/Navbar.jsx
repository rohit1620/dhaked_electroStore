import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed w-full top-0 z-50 bg-black text-white flex h-15 justify-around items-center ">
        <div>
          <h1 className="italic">Dhaked-Electric</h1>
        </div>

        <div className="flex items-center gap-10">
          <input
            type="text"
            placeholder="Search products..."
            class=" hidden md:block px-4 py-2 w-38 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-black h-6 text-black"
          />
          <ul
            className={`fixed md:static top-15  left-0 h-screen md:h-max bg-black w-full md:w-max flex flex-col items-center p-10 md:p-0 md:flex-row gap-5 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Link to="/">
              <li onClick={() => setOpen(!open)}>Home</li>
            </Link>
            <Link to="/product">
              <li onClick={() => setOpen(!open)}>Product</li>
            </Link>
            <Link to="/singup">
              <li onClick={() => setOpen(!open)}>Singup</li>
            </Link>
            <Link to="/login">
              <li onClick={() => setOpen(!open)}>Login</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-6">
          <Link to="/cart">
            <h3>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </h3>
          </Link>
          <Link to="/profile">
            <h2>profile</h2>
          </Link>
        </div>
        <h3 className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FontAwesomeIcon icon={faCircleXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </h3>
      </div>
    </>
  );
};

export default Navbar;

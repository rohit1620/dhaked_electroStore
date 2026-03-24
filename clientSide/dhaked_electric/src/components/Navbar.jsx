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
          <div className={`text-xl italic font-bold text-blue-600`}>
            <span className="text-yellow-500">𝓓</span>𝓛i𝓖𝓗𝓣
          </div>
        </div>

        <div className="flex items-center gap-10">
          <input
            type="text"
            placeholder="Search products..."
            class=" hidden md:block px-4 py-2 w-38 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-black h-6 text-black"
          />

          <ul
            className={`fixed md:static top-15   left-0 h-screen md:h-max bg-black w-full md:w-max flex flex-col items-center p-10 md:p-0 md:flex-row gap-5 transform transition-transform md:translate-x-0 duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <Link to="/">
              <li onClick={() => setOpen(false)}>Home</li>
            </Link>
            <Link to="/product">
              <li onClick={() => setOpen(false)}>Product</li>
            </Link>
            <Link to="/singup">
              <li onClick={() => setOpen(false)}>Singup</li>
            </Link>
            <Link to="/login">
              <li onClick={() => setOpen(false)}>Login</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-6">
          <Link to="/cart">
            <h3 onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faCartArrowDown} />
              <sup className="text-yellow-400 text-xl font-bold">4</sup>
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

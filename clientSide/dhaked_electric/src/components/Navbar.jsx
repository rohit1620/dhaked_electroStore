import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex h-15 justify-around items-center">
        <div>
          <h1 className="italic">Dhaked-Electric</h1>
        </div>

        <div className="flex items-center gap-10">
          <input
            type="text"
            placeholder="Search products..."
            class="px-4 py-2 w-38 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white placeholder-black h-6 text-black"
          />
          <ul className="flex gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/product">
              <li>Product</li>
            </Link>
            <Link to="/singup">
              <li>Singup</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-6">
          <Link to="/cart">
            <h3>cartIcon</h3>
          </Link>
          <Link to="/profile">
            <h2>profile</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

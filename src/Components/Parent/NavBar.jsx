import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "./navitems";
import Logo from "./../../images/Logo.PNG";

const NavBar = () => {
  return (
    <div className="bg-[#096da3] h-14 fixed w-screen z-10 flex justify-around ">
      <Link to={"/"}>
        <img
          src={Logo}
          alt="Please set logo here"
          className="bg-black flex-0.5 ml-[calc(0_-_136)] h-full"
        />
      </Link>
      <ul className="flex-3 flex justify-around items-center w-screen">
        {navItems.map((items, index) => {
          return (
            <li key={index}>
              <Link
                to={items.path}
                className="text-white m-0.5 hover:bg-[#f7a006] p-2"
              >
                {items.link}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;

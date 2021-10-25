import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { DarkMode } from "../App";

const Navbar = () => {
  let router = useHistory();
  const darkMode = useContext(DarkMode);
  return (
    <>
      <div className="flex bg-gray-300 h-24 items-center justify-center gap-6">
        <Link to="/" className="p-3 ">
          Home
        </Link>
        <Link
          to={{
            pathname: "/about",
            state: "",
          }}
          className="bg-gray-300 p-3 "
        >
          About
        </Link>
        <Link to="/team/Pakizar" className="p-3 ">
          Team
        </Link>
        <input
          type="checkbox"
          className="w-5 h-5"
          onClick={(e) => {
            darkMode.setDarkMode(e.target.checked);
          }}
        />
      </div>
    </>
  );
};
export default Navbar;

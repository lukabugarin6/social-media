import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="absolute w-full">
      <nav className="relative w-full text-white px-24 py-4 flex justify-between w-full">
        <div className="logo text-5xl"><Link to="/">devcom</Link></div>
        {/* <ul className="flex justify-center w-full absolute left-0 w-full text-center text-quinary gap-x-10 text-lg">
          <li className="">Profiles</li>
          <li>Register</li>
          <li>Login</li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Navbar;

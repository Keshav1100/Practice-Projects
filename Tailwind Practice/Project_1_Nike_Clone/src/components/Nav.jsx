import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants/index.js";
function Nav() {
  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" />
          </a>
          <ul className="flex-1 flex justify-between items-center gap-16 max-lg:hidden">
            {navLinks.map((navLink) => {
              return (
                <li key={navLink.label}>
                  <a
                    href={navLink.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {navLink.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger-icon" width={25} height={25}/>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Nav;

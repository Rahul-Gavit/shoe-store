import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="padding-x py-4 absolute z-10 w-full ">
      <nav className=" flex justify-between item-center  max-container">
        <a href="/">
          <img src={headerLogo} width={130} height={20} alt="Logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a
                href={items.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" max-lg:flex hidden flex-col justify-end items-center ">
          <img
            src={toggle ? close : hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            className="cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-0 left-0 z-10 mt-[60px] bg-orange-200 w-full h-[450px] md:h-[400px]  `}
          >
            <div className=" flex items-center w-full h-full">
              <ul className=" w-full flex flex-col gap-10 justify-center items-center">
                {navLinks.map((items) => (
                  <li key={items.label}>
                    <a
                      href={items.href}
                      className=" hover:text-slate-gray font-montserrat leading-normal text-2xl font-semibold text-black"
                    >
                      {items.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

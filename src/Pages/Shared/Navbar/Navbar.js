import React, { useState } from "react";
import "./Navbar.css";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  // NAV OPACITY CHANGER
  const navbar = document.querySelector(".navbarContainer");
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
  // ALL ROUTE
  const link = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Blogs", link: "/blogs" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "Other", link: "/other" },
  ];
  // RESPONSIVE TOGGLER BTN STATE
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 w-[100%]">
      <div className="navbarContainer w-[95%] mx-auto rounded-2xl mt-4">
        <div className="p-1 lg:px-8 md:px-4">
          <nav className="flex items-center justify-between">
            {/* PROJECT LOGO */}
            <div>
              <a href="#">Sohoj Pay</a>
            </div>
            <div className="ml-20">
              {" "}
              {/* NAV ITEM */}
              <ul
                className={`lg:flex w-100 h-72 lg:h-auto lg:w-full block lg:items-center navbar absolute duration-500 ease-in lg:static top-16 ${
                  open ? "left-[-10px] top-12" : "left-[-380px]"
                }`}
              >
                {link.map((item) => (
                  <li className="block text-center " key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
                {/* RESPONSIVE LOGIN OR SIGN UP  BUTTON */}
                <div className="flex items-center justify-center md:hidden">
                  <button className="btn bg-sky-600 hover:bg-sky-700 border-0 btn-sm mr-3">
                    Login
                  </button>
                  <button className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm">
                    Sign Up
                  </button>
                </div>
                {/* LARGE DEVICE LOGIN OR SIGN UP BUTTON */}
                <button className="btn bg-transparent border-2 text-black hover:bg-black hover:text-white btn-sm lg:mx-4 hidden lg:block">
                  Login
                </button>
                <button className="btn bg-red-600 hover:bg-red-700 border-0 btn-sm hidden lg:block">
                  Sign Up
                </button>
              </ul>
            </div>
            {/* NAVBAR TOGGLER ICON */}
            <div onClick={() => setOpen(!open)} className="w-10 h-10 lg:hidden">
              {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

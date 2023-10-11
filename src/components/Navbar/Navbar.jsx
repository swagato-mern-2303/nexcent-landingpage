import { useState } from "react";
import navLogo from "../../assets/logo-navbar.png";
import NavButton from "../Buttons/NavButton";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  "home",
  "service",
  "feature",
  "product",
  "testimonial",
  "faq",
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  showNav
    ? (document.querySelector("body").style.overflowY = "hidden")
    : (document.querySelector("body").style.overflowY = "auto");
  return (
    <nav className="relative bg-light-400 py-[22px]">
      <div className="main-container">
        <div className="flex items-center justify-between">
          <picture>
            <img src={navLogo} alt="Navbar Logo" />
          </picture>
          <button className="lg:hidden" onClick={() => setShowNav(true)}>
            <FaBars size={28} />
          </button>
          <div
            className={`fixed right-0 top-0 h-screen w-[320px] items-center gap-x-[50px] overflow-y-auto bg-accent bg-opacity-40 px-5 py-14 text-center backdrop-blur-md duration-300 lg:static lg:flex lg:h-auto lg:w-auto lg:translate-x-0 lg:translate-y-0 lg:bg-transparent lg:px-0 lg:py-0 lg:text-start laptop:gap-x-[100px] ${
              showNav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute right-5 top-5 lg:hidden"
              onClick={() => setShowNav(false)}
            >
              <FaTimes size={28} />
            </button>
            <ul className="flex flex-col gap-x-12 gap-y-5 lg:flex-row">
              {navLinks.map((item, index) => (
                <NavLink key={index}>{item}</NavLink>
              ))}
            </ul>
            <div className="mx-auto mt-5 flex max-w-[300px] flex-col gap-[14px] lg:mx-0 lg:mt-0 lg:flex-row">
              <NavButton>Log in</NavButton>
              <NavButton bg="accent">Sign up</NavButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ children }) {
  return (
    <li>
      <a
        className={`text-base font-medium text-dark-600 duration-300 hover:text-accent ${
          children === "faq" ? "uppercase" : "capitalize"
        }`}
        href={`#${children}`}
      >
        {children}
      </a>
    </li>
  );
}

export default Navbar;

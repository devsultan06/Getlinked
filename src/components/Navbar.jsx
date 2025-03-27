import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import open from "/image/open.png";
import close from "/image/close.png";
import Links from "../data/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header flex justify-between items-center px-[120px] max-1000:px-[20px] w-full pt-[30px]">
      <NavLink to="/" className="nav__logo text-2xl font-semibold">
        get<span className="text-[#D434FE]">linked</span>
      </NavLink>

      <nav className="flex  max-850:hidden">
        <ul className="nav__list  flex items-center justify-center gap-6">
          {Links.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className="hover:text-[#D434FE] transition duration-300"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <button className="register bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff] text-white py-2.5 px-8 rounded cursor-pointer">
            Get Started
          </button>
        </ul>
      </nav>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <img src={open} alt="Open Menu" />
      </div>

      {showMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-full h-screen px-[60px] bg-[#150E28] text-white  z-50"
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <img src={close} alt="Close Menu" />
          </div>

          <ul className="flex flex-col mt-[110px] mb-[50px]  gap-[50px] px-[5px]">
            {Links.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  className="hover:text-[#D434FE] text-[17px] transition duration-300"
                  onClick={toggleMenu}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className="register bg-gradient-to-r from-[#ff26b9] via-[#d434fe] to-[#903aff] text-white py-2.5 px-8 rounded cursor-pointer">
            Get Started
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

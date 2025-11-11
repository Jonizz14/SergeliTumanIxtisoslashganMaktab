import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";
import Logo from "./logo.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activityDropdownOpen, setActivityDropdownOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const aboutDropdownRef = useRef(null);
  const activityDropdownRef = useRef(null);

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    setActivityDropdownOpen(false);
  };

  const toggleActivityDropdown = () => {
    setActivityDropdownOpen(!activityDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setAboutDropdownOpen(false);
    setActivityDropdownOpen(false);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        aboutDropdownOpen &&
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }

      if (
        activityDropdownOpen &&
        activityDropdownRef.current &&
        !activityDropdownRef.current.contains(event.target)
      ) {
        setActivityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [aboutDropdownOpen, activityDropdownOpen]);

  return (
    <header className={`header ${showHeader ? "visible" : "hidden"}`}>
      <nav className="nav-container">
        <NavLink to="/" onClick={closeAllDropdowns}>
          <div className="header-logo-div">
            <img className="logo-website" src={Logo} alt="logo" />
            <div>
              <p>Sergeli Tuman</p>
              <p>Ixtisoslashtirilgan Maktab</p>
            </div>
          </div>
        </NavLink>

        <div className="nav-right-section desktop-menu">
          <ul className="nav-links">
            <li>
              <NavLink className="nav-links-home" to="/" end onClick={closeAllDropdowns}>
                Bosh sahifa
              </NavLink>
            </li>
          </ul>

          <div className="dropdown-container" ref={aboutDropdownRef}>
            <button className="dropdown-toggle" onClick={toggleAboutDropdown}>
              Maktab Haqida
              <span className={`arrow ${aboutDropdownOpen ? "up" : ""}`}></span>
            </button>
            <ul className={`dropdown-menu ${aboutDropdownOpen ? "show" : ""}`}>
              <li><NavLink to="/teachers" onClick={closeAllDropdowns}>Maktab tarixi</NavLink></li>
              <li><NavLink to="/talentedstudents" onClick={closeAllDropdowns}>Rahbariyat</NavLink></li>
            </ul>
          </div>

          <div className="dropdown-container" ref={activityDropdownRef}>
            <button className="dropdown-toggle" onClick={toggleActivityDropdown}>
              Maktab Faoliyati
              <span className={`arrow ${activityDropdownOpen ? "up" : ""}`}></span>
            </button>
            <ul className={`dropdown-menu ${activityDropdownOpen ? "show" : ""}`}>
              <li><NavLink to="/news" onClick={closeAllDropdowns}>Yangiliklar</NavLink></li>
              <li><NavLink to="/announcements" onClick={closeAllDropdowns}>E'lonlar</NavLink></li>
              <li><NavLink to="/addition" onClick={closeAllDropdowns}>To'garaklar</NavLink></li>
              <li><NavLink to="/teachers" onClick={closeAllDropdowns}>Ustozlar</NavLink></li>
              <li><NavLink to="/talentedstudents" onClick={closeAllDropdowns}>O'quvchilar</NavLink></li>
              <li><NavLink to="/schedule" onClick={closeAllDropdowns}>Dars Jadvali</NavLink></li>
            </ul>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/contact" onClick={closeAllDropdowns}>Bog'lanish</NavLink>
            </li>
          </ul>
        </div>

        <div className="mobile-menu-btn">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(false)}
              >
                <FiX size={28} color="#fff" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setOpen(true)}
              >
                <FiMenu size={28} color="#0b1e70" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className={`mobile-sidebar ${open ? "open" : ""}`}>
          <ul>
            <li><NavLink to="/" end onClick={closeAllDropdowns}>Bosh sahifa</NavLink></li>
            <li><NavLink to="/news" onClick={closeAllDropdowns}>Yangiliklar</NavLink></li>
            <li><NavLink to="/teachers" onClick={closeAllDropdowns}>Ustozlar</NavLink></li>
            <li><NavLink to="/schedule" onClick={closeAllDropdowns}>Dars Jadvali</NavLink></li>
            <li><NavLink to="/announcements" onClick={closeAllDropdowns}>E'lonlar</NavLink></li>
            <li><NavLink to="/addition" onClick={closeAllDropdowns}>To'garaklar</NavLink></li>
            <li><NavLink to="/talentedstudents" onClick={closeAllDropdowns}>O'quvchilar</NavLink></li>
            <li><NavLink to="/contact" onClick={closeAllDropdowns}>Bog'lanish</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

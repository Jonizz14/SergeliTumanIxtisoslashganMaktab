import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import Logo from "./logo.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activityDropdownOpen, setActivityDropdownOpen] = useState(false);

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

      if (
        open &&
        !event.target.closest('.menu-btn') &&
        !event.target.closest('.mobile-nav-links')
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [aboutDropdownOpen, activityDropdownOpen, open]);

  return (
    <header>
      <nav className="nav-container">
        <NavLink to={"/"} onClick={closeAllDropdowns}>
          <div className="header-logo-div">
            <img className="logo-website" src={Logo} alt="logo" />
            <div>
              <p>Sergeli Tuman</p>
              <p>Ixtisoslashtirilgan Maktab</p>
            </div>
          </div>
        </NavLink>

        <div className="nav-right-section">
          <ul className="nav-links">
            <li>
              <NavLink className="nav-links-home" to="/" end onClick={closeAllDropdowns}>Asosiy</NavLink>
            </li>
          </ul>

          <div className="dropdown-container" ref={activityDropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={toggleActivityDropdown}
            >
              Maktab Faoliyati
              <span className={`arrow ${activityDropdownOpen ? "up" : ""}`}></span>
            </button>

            <ul className={`dropdown-menu ${activityDropdownOpen ? "show" : ""}`}>
              <li>
                <NavLink to="/news" onClick={closeAllDropdowns}>Yangiliklar</NavLink>
              </li>
              <li>
                <NavLink to="/announcements" onClick={closeAllDropdowns}>E'lonlar</NavLink>
              </li>
              <li>
                <NavLink to="/addition" onClick={closeAllDropdowns}>To'garaklar</NavLink>
              </li>
              <li>
                <NavLink to="/schedule" onClick={closeAllDropdowns}>Dars Jadvali</NavLink>
              </li>
            </ul>
          </div>

          <div className="dropdown-container" ref={aboutDropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={toggleAboutDropdown}
            >
              Maktabdagi Shaxslar
              <span className={`arrow ${aboutDropdownOpen ? "up" : ""}`}></span>
            </button>

            <ul className={`dropdown-menu ${aboutDropdownOpen ? "show" : ""}`}>
              <li>
                <NavLink to="/teachers" onClick={closeAllDropdowns}>Ustozlar</NavLink>
              </li>
              <li>
                <NavLink to="/talentedstudents" onClick={closeAllDropdowns}>O'quvchilar</NavLink>
              </li>
            </ul>
          </div>

          <ul className="nav-links">
            <li>
              <NavLink to="/contact" onClick={closeAllDropdowns}>Bog'lanish</NavLink>
            </li>
          </ul>

          <button
            className={`menu-btn ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`mobile-nav-links ${open ? "active" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeAllDropdowns}>Asosiy</NavLink>
          </li>
          <li>
            <NavLink to="/news" onClick={closeAllDropdowns}>Yangiliklar</NavLink>
          </li>
          <li>
            <NavLink to="/teachers" onClick={closeAllDropdowns}>Ustozlar</NavLink>
          </li>
          <li>
            <NavLink to="/schedule" onClick={closeAllDropdowns}>Dars Jadvali</NavLink>
          </li>
          <li>
            <NavLink to="/announcements" onClick={closeAllDropdowns}>E'lonlar</NavLink>
          </li>
          <li>
            <NavLink to="/addition" onClick={closeAllDropdowns}>To'garaklar</NavLink>
          </li>
          <li>
            <NavLink to="/talentedstudents" onClick={closeAllDropdowns}>O'quvchilar</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeAllDropdowns}>Bog'lanish</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
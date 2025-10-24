import React from "react";
import "./footer.css";
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../Footer/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col-">
          <Link to={"/"}>
            <div className="footer-logo-div">
              <img className="logo-footer" src={Logo} alt="" />
              <div>
                <p className="footer-logo-text">Bizning Maktab</p>
                <p className="footer-logo-text">Kelajak uchun ta’lim</p>
              </div>
            </div>
          </Link>
          <div className="footer-col">
            <a href="tel:+998901234567" className="footer-link">
              +998 90 123 45 67
            </a>
            <a href="mailto:info@liftmedia.com" className="footer-link">
              info@liftmedia.com
            </a>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/sergeli_ixtisos_maktabi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="footer-flex">
          <div className="footer-col">
            <h3>Sahifalar</h3>
            <Link to="/" className="footer-link">
              Asosiy
            </Link>
            <Link to="/news" className="footer-link">
              Yangiliklar
            </Link>
            <Link to="/teachers" className="footer-link">
              O'qituvchilar
            </Link>
            <Link to="/schedule" className="footer-link">
              Dars Jadvali
            </Link>
            <Link to="/announcements" className="footer-link">
              E'lonlar
            </Link>
            <Link to="/addition" className="footer-link">
              To'garaklar
            </Link>
          </div>


        </div>
        <div className="footer-col">
          <h3>Bizning manzilimiz</h3>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.5804135650701!2d69.2218422139766!3d41.210502803385936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c403191f6d%3A0xc8199e959d144b2e!2sSergeli%20ixtisoslashtirilgan%20maktab!5e0!3m2!1sru!2s!4v1758799393697!5m2!1sru!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Lift Media. Hamma huquqlar himoyalangan.</p>
        <Link className="ourcommand" to="/ourcommand">
          Bizning jamoa
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

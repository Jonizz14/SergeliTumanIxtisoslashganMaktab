import React, { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";
import "/src/pages/NewsDetails/NewsDetails.css";
import AOS from "aos";
import "aos/dist/aos.css";

function NewsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state?.news;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!news) {
    return (
      <div className="newsdetails">
        <p>Yangilik topilmadi.</p>
        <Link to="/news" className="breadcrumb-link">
          ⬅ Yangiliklarga qaytish
        </Link>
      </div>
    );
  }

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div data-aos="fade-up" className="newsdetails">
      <div className="breadcrumb">
        <Link to="/news" className="breadcrumb-link">Yangiliklar</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{news.title}</span>
      </div>

      <img src={news.image} alt={news.title} className="newsdetails-img" />

      <h2 className="newsdetails-title">{news.title}</h2>
      <p className="newsdetails-desc">{news.description}</p>

      <div className="newsdetails-footer">
        <IoCalendarNumber className="newsdetails-icon" />
        <span className="newsdetails-date">{news.date}</span>
      </div>
    </div>
  );
}

export default NewsDetails;

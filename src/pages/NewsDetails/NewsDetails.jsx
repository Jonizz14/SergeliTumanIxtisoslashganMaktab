import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoCalendarNumber } from "react-icons/io5";
import "/src/pages/NewsDetails/NewsDetails.css";
import AOS from "aos";
import "aos/dist/aos.css";

function NewsDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state?.news;
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNewsList(data));
  }, []);

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
    <>
      <div className="newsdetails-layout">
        <div className="newsdetails-main">
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
              <IoCalendarNumber size={30} className="newsdetails-icon" />
              <span className="newsdetails-date">{news.date}</span>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="newsdetails-side">
          <h3 className="side-title">Qo'shimcha yangiliklar</h3>
          {newsList.slice(0, 6).map((item) => (
            <div key={item.id} className="side-card">
              <img src={item.image} alt={item.title} className="side-card__img" />
              <div className="side-card__body">
                <h4 className="side-card__title">{item.title}</h4>
                <Link
                  to={`/news/${item.id}`}
                  state={{ news: item }}
                  className="side-card__btn"
                >
                  Batafsil →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default NewsDetails;

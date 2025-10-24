import React, { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { Link } from "react-router-dom";
import "/src/pages/News/news.css";

function News() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:3000/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Xato:", err);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="news-section">
      <p className="news-section-p1">Maktab yangiliklari</p>
      <p className="news-section-p2">
        Maktabimiz hayotidagi so‘nggi voqealar va muhim yangiliklar
      </p>

      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="input"
          placeholder="Yangiliklarni qidirish..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="news-list">
        {filteredNews.map((item) => (
          <div key={item.title} className="news-card">
            <img src={item.image} alt={item.title} />
            <div className="news-card-header">
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
            <div className="news-card-footer">
              <div className="news-date">
                <IoCalendarNumber className="calendar-icon" />
                <span className="date-text">{item.date}</span>
              </div>

              <Link
                to="/news/details"
                state={{ news: item }}
                className="detail-link"
              >
                Batafsil
              </Link>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
import React, { useEffect, useState } from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "/src/pages/News/news.css";
import AOS from "aos";
import "aos/dist/aos.css";

function News() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [bookmarked, setBookmarked] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarkedNews", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const [sortOption, setSortOption] = useState("all");

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

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleBookmark = (title) => {
    setBookmarked((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  let filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === "bookmarked") {
    filteredNews = filteredNews.filter((item) =>
      bookmarked.includes(item.title)
    );
  } else if (sortOption === "recent") {
    filteredNews = [...filteredNews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (sortOption === "oldest") {
    filteredNews = [...filteredNews].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  }

  return (
    <div data-aos="fade-up" className="news-section">
      <p className="news-section-p1">Maktab yangiliklari</p>
      <p className="news-section-p2">
        Maktabimiz hayotidagi so‘nggi voqealar va muhim yangiliklar
      </p>

      <div className="news-controls">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input"
            placeholder="Yangiliklarni qidirish..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>

        <select
          className="sort-select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="all">Barchasi</option>
          <option value="bookmarked">Faqat saqlanganlar</option>
          <option value="recent">Eng yangilari</option>
          <option value="oldest">Eng eskilari</option>
        </select>
      </div>

      <div data-aos="fade-up" className="news-list">
        {filteredNews.map((item) => (
          <div key={item.title} className="news-card">
            <div className="news-image-wrapper">
              <img src={item.image} alt={item.title} />
              <button
                className="bookmark-btn"
                onClick={() => toggleBookmark(item.title)}
              >
                {bookmarked.includes(item.title) ? (
                  <BsBookmarkFill className="bookmark-icon active" />
                ) : (
                  <BsBookmark className="bookmark-icon" />
                )}
              </button>
            </div>

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

      {filteredNews.length === 0 && (
        <p className="no-news">Yangilik topilmadi.</p>
      )}
    </div>
  );
}

export default News;

import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "/src/pages/Announcements/announcements.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Announcements() {
  const [anons, setAnons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [bookmarked, setBookmarked] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarkedNews", JSON.stringify(bookmarked));
  }, [bookmarked]);

  const [sortOption, setSortOption] = useState("all");

  useEffect(() => {
    const fetchAnons = async () => {
      try {
        const res = await fetch("http://localhost:3000/anons");
        const data = await res.json();
        setAnons(data);
      } catch (err) {
        console.error("API xatosi:", err);
      }
    };
    fetchAnons();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleBookmark = (id) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  let filteredAnons = anons.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOption === "bookmarked") {
    filteredAnons = filteredAnons.filter((item) =>
      bookmarked.includes(item.id)
    );
  } else if (sortOption === "recent") {
    filteredAnons = [...filteredAnons].sort(
      (a, b) => new Date(b.time) - new Date(a.time)
    );
  }

  return (
    <div data-aos="fade-up" className="anons-section">
      <p className="anons-title">E'lonlar</p>
      <p className="anons-subtitle">
        Maktabimizdagi eng so‘nggi anonslar va xabarlar
      </p>

      <div className="anons-controls">
        <form className="anons-form" onSubmit={(e) => e.preventDefault()}>
          <input
            className="anons-input"
            placeholder="Anonslarni qidirish..."
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
        </select>
      </div>

      <div data-aos="fade-up" className="anons-list">
        {filteredAnons.map((item) => (
          <div key={item.id || item.title} className="anons-card">
            <div className="anons-image-wrapper">
              <img src={item.image} alt={item.title} />
              <button
                className="bookmark-btn"
                onClick={() => toggleBookmark(item.id)}
              >
                {bookmarked.includes(item.id) ? (
                  <BsBookmarkFill className="bookmark-icon active" />
                ) : (
                  <BsBookmark className="bookmark-icon" />
                )}
              </button>
            </div>

            <div className="anons-card-header">
              <h3>{item.title}</h3>
            </div>

            <p>{item.description}</p>

            <div className="anons-card-footer">
              <div className="anons-date">
                <IoTimeOutline className="time-icon" />
                <span className="date-text">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredAnons.length === 0 && (
        <p className="no-anons">E'lon topilmadi.</p>
      )}
    </div>
  );
}

export default Announcements;

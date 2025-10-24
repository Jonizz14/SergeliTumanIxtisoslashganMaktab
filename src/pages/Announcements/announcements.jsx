import React, { useEffect, useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "/src/pages/Announcements/announcements.css";

function Announcements() {
  const [anons, setAnons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredAnons = anons.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="anons-section">
      <p className="anons-title">E'lonlar</p>
      <p className="anons-subtitle">
        Maktabimizdagi eng so‘nggi anonslar va xabarlar
      </p>

      <form className="anons-form" onSubmit={(e) => e.preventDefault()}>
        <input
          className="anons-input"
          placeholder="Anonslarni qidirish..."
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <div className="anons-list">
        {filteredAnons.map((item) => (
          <div key={item.id || item.title} className="anons-card">
            <img src={item.image} alt={item.title} />
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
    </div>
  );
}

export default Announcements;

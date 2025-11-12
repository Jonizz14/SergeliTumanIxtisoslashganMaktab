import React, { useEffect, useState } from "react";
import "./ScientificWorks.css";
import AOS from "aos";
import "aos/dist/aos.css";

function ScientificWorks() {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);

    fetch('http://localhost:3000/scientificWorks')
      .then(response => response.json())
      .then(data => setWorks(data))
      .catch(error => console.error('Error fetching scientific works:', error));
  }, []);

  return (
    <section className="scientific-works">
      <div className="scientific-container">
        <h2 data-aos="fade-up" className="scientific-title">
          Ilmiy Ishlar
        </h2>

        <p data-aos="fade-up" className="scientific-subtitle">
          Maktabimizda o‘quvchilarning ilmiy faoliyati va tadqiqotlari rivojlantiriladi.
          Bu bo‘limda ilmiy ishlar, loyihalar va yutuqlar haqida ma’lumotlar beriladi.
        </p>

        <div data-aos="fade-up" className="scientific-grid">
          {works.map(work => (
            <div key={work.id} className="scientific-card">
              <video controls className="scientific-video">
                <source src={work.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3>{work.title}</h3>
              <p>O‘quvchi: {work.studentName}</p>
              <p>{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScientificWorks;
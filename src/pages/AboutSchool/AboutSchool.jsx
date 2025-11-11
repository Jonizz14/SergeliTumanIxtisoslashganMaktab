import React, { useEffect } from "react";
import "./AboutSchool.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiUsers, FiBookOpen } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";

function AboutSchool() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="about-school">
      <div className="about-container">
        <h2 data-aos="fade-up" className="about-title">
          Bizning Maktab Haqida
        </h2>

        <p data-aos="fade-up" className="about-subtitle">
          Sergeli tuman ixtisoslashgan maktabi — kelajak avlod uchun zamonaviy ta’lim maskani.
          Bu yerda har bir o‘quvchining iqtidori, tafakkuri va texnologik salohiyati rivojlantiriladi.
        </p>

        <div data-aos="fade-up" className="about-grid">
          <div className="about-card">
            <FiBookOpen className="about-icon" />
            <h3>Ta’lim Sifati</h3>
            <p>
              Har bir dars zamonaviy metodika asosida o‘tiladi, o‘quvchilarni fikrlashga undovchi usullar qo‘llaniladi.
            </p>
          </div>

          <div className="about-card">
            <FiUsers className="about-icon" />
            <h3>Jamoa</h3>
            <p>
              50 dan ortiq tajribali pedagoglar faoliyat yuritadi, ularning aksariyati xalqaro sertifikatlarga ega.
            </p>
          </div>

          <div className="about-card">
            <FaChalkboardTeacher className="about-icon" />
            <h3>To‘garaklar</h3>
            <p>
              IT, robototexnika, ingliz tili, san’at va sport yo‘nalishlarida muntazam to‘garaklar mavjud.
            </p>
          </div>

          <div className="about-card">
            <LuGraduationCap className="about-icon" />
            <h3>Natijalar</h3>
            <p>
              Maktab o‘quvchilari har yili respublika olimpiadalari va tanlovlarda yuqori o‘rinlarni egallaydilar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSchool;

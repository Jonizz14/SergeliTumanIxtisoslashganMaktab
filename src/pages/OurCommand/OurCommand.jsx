import "./OurCommand.css";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "To'xtayev Jahongir",
    role: "Frontend UI/UX Designer",
    bio: "UI/UX dizayn va React texnologiyasiga qiziqaman Asosan JavaScript bilan ishlayman va JSON API hamda turli ma’lumotlar bazalari bilan integratsiya qilishni yoqtiraman Yangi loyihalarda ishlash va o‘rganishga doim tayyorman",
    img: "",
    github: "https://github.com/Jonizz14",
    telegram: "https://jonizz_devvvv.t.me/",
  },
  {
    id: 2,
    name: "Jabborov Adham",
    role: "Frontend",
    bio: "React Texnalogiyasida ishlayman va UI/UX design, Asosan Javascript, Node.js va Json-Server, API hamda turli ma’lumotlar bazalari bilan integratsiya qilishni yoqtiraman Yangi loyihalarda ishlash va o‘rganishga doim tayyorman",
    img: "",
    github: "https://github.com/adhamjonjabborov07",
    telegram: "https://jabborov_0o7.t.me/",
  },
];

export default function OurTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <div data-aos="fade-up" className="team-page-wrapper">
      <header className="team-hero-section">
        <div className="team-hero-content">
          <h1 className="team-hero-title">Bizning Jamoa</h1>
          <p className="team-hero-lead">
            Biz yangi fikrlaydigan va texnologiyaga qiziqqan ikkita yosh dasturchidan iborat jamoamiz Hozirda o‘rganish va tajriba orttirish jarayonida bo‘lsak-da maqsadlarimiz katta va aniq Biz UI/UX tamoyillariga amal qilgan holda chiroyli va qulay interfeyslar yaratishga intilamiz
          </p>
        </div>
      </header>

      <main className="team-members-container">
        {teamMembers.map((member) => (
          <article className="team-member-card" key={member.id}>
            <div className="member-card-top">
              <div className="member-avatar-wrap">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="member-avatar" />
                ) : (
                  <div className="member-avatar-placeholder">
                    {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                )}
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>

            <p className="member-bio">{member.bio}</p>

            <div className="member-card-footer">
              <div className="member-social-links">
                <a
                  href={member.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                  className="social-link"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.telegram || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="telegram"
                  className="social-link"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </article>
        ))}
      </main>

      <section data-aos="fade-up" className="project-info-section">
        <div className="project-info-inner">
          <h2 className="project-info-title">Loyiha haqida</h2>
          <p className="project-info-text">
            Ushbu loyiha g‘oyasi dastlab bizning o‘qituvchimiz tomonidan berilgan kichik topshiriq sifatida boshlangan edi Keyinchalik biz uni yanada kengaytirib mustaqil ravishda jamoaviy ishga aylantirdik Maqsadimiz – foydalanuvchilarga qulay chiroyli va zamonaviy web interfeyslar taqdim etishdir
          </p>
          <p className="project-info-text">
            Har bir dizayn elementi foydalanuvchi tajribasini yaxshilashga qaratilgan Bu loyiha orqali biz React komponentlar arxitekturasi va UI tamoyillarini chuqurroq o‘rgandik
          </p>
          <div className="project-meta-info">
            <div className="project-meta-item">
              <strong>G‘oya:</strong> UI/UX dizaynni amaliy o‘rganish
            </div>
            <div className="project-meta-item">
              <strong>Texnologiyalar:</strong> React,CSS,JavaScript Responsive Design
            </div>
            <div className="project-meta-item">
              <strong>Reja:</strong> Loyihani keyinchalik real jamoaviy platformaga aylantirish
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

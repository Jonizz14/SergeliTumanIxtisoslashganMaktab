import "./OurCommand.css";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import React, { useEffect } from "react";

const teamMembers = [
  {
    id: 1,
    name: "To'xtayev Jahongir",
    role: "Frontend UI/UX Designer",
    bio: "UI/UX dizayn va React texnologiyasiga qiziqaman. Asosan JavaScript bilan ishlayman va JSON, API hamda turli ma’lumotlar bazalari bilan integratsiya qilishni yoqtiraman. Yangi loyihalarda ishlash va o‘rganishga doim tayyorman.",
    img: "",
    github: "https://github.com/Jonizz14",
    telegram: "https://jonizz_devvvv.t.me/",
  },
  {
    id: 2,
    name: "Jabborov Adham",
    role: "Frontend",
    bio: "Foydalanuvchi tajribasiga urg'u beradigan va dizayn tamoyillariga amal qiluvchi frontend muhandis.",
    img: "",
    github: "https://github.com/adhamjonjabborov07",
    telegram: "https://jabborov_0o7.t.me/",
  },
];

export default function OurCommand() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="team-page">
      <header className="team-hero">
        <div className="hero-content">
          <h1>Bizning Jamoa</h1>
          <p className="lead">
            Biz yangi fikrlaydigan va texnologiyaga qiziqqan ikkita yosh dasturchidan iborat
            jamoamiz. Hozirda o‘rganish va tajriba orttirish jarayonida bo‘lsak-da, maqsadlarimiz
            katta va aniq. Biz UI/UX tamoyillariga amal qilgan holda chiroyli va qulay interfeyslar
            yaratishga intilamiz.
          </p>
        </div>
      </header>

      <main className="team-container">
        {teamMembers.map((m) => (
          <article className="team-card" key={m.id}>
            <div className="card-top">
              <div className="avatar-wrap">
                {m.img ? (
                  <img src={m.img} alt={m.name} className="avatar" />
                ) : (
                  <div className="avatar-fallback">
                    {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                )}
              </div>
              <div className="card-info">
                <h3 className="name">{m.name}</h3>
                <p className="role">{m.role}</p>
              </div>
            </div>

            <p className="bio">{m.bio}</p>

            <div className="card-footer">
              <div className="socials">
                <a
                  href={m.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub />
                </a>
                <a
                  href={m.telegram || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="telegram"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </article>
        ))}
      </main>
    
      <section className="project-info">
        <div className="project-inner">
          <h2>Loyiha haqida</h2>
          <p>
            Ushbu loyiha g‘oyasi dastlab bizning o‘qituvchimiz tomonidan berilgan kichik topshiriq
            sifatida boshlangan edi. Keyinchalik biz uni yanada kengaytirib, mustaqil ravishda
            jamoaviy ishga aylantirdik. Maqsadimiz – foydalanuvchilarga qulay, chiroyli va zamonaviy
            web interfeyslar taqdim etishdir.
          </p>
          <p>
            Har bir dizayn elementi foydalanuvchi tajribasini yaxshilashga qaratilgan. Bu loyiha
            orqali biz React, komponentlar arxitekturasi va UI tamoyillarini chuqurroq o‘rgandik.
          </p>
          <div className="project-meta">
            <div>
              <strong>G‘oya:</strong> UI/UX dizaynni amaliy o‘rganish
            </div>
            <div>
              <strong>Texnologiyalar:</strong> React, CSS, Responsive Design
            </div>
            <div>
              <strong>Reja:</strong> Loyihani keyinchalik real jamoaviy platformaga aylantirish
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

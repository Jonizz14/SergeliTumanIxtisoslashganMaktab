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
          Sergeli tuman ixtisoslashgan maktabi — kelajak avlod uchun zamonaviy
          ta’lim maskani. Bu yerda har bir o‘quvchining iqtidori, tafakkuri va
          texnologik salohiyati rivojlantiriladi.
        </p>

        <section className="about-info">
          <div className="about-info-container">
            <div data-aos="fade-right" className="about-info-image">
              <img
                src="/src/pages/Home/banner2.png"
                alt="Maktab ichki ko‘rinishi"
              />
            </div>

            <div data-aos="fade-left" className="about-info-content">
              <h2>Maktabimiz haqida qisqacha ma'lumot</h2>

              <div className="about-info-row">
                <span className="about-info-line"></span>
                <p className="about-info-text">
                  Sergeli tuman ixtisoslashtirilgan maktabi 2022-yilda
                  faoliyatini boshlagan. Maktab aniq va tabiiy fanlarga
                  ixtisoslashgan bo‘lib, ta’lim tili – o‘zbek. Shuningdek,
                  ingliz tili (IELTS), koreys tili, IT va robototexnika
                  yo‘nalishlari mavjud.
                </p>
              </div>

              <div className="about-info-row">
                <span className="about-info-line"></span>
                <p className="about-info-text">
                  Ilk o‘quv yili maktab 17 ta sinfda jami 408 ta o‘quvchini
                  qamrab olgan. 2023-yil sentabrda yangi bino foydalanishga
                  topshirildi. Hozirda 540 o‘quvchi 24 ta sinfda tahsil olmoqda.
                </p>
              </div>

              <div className="about-info-row">
                <span className="about-info-line"></span>
                <p className="about-info-text">
                  Bugungi kunda 53 nafar pedagog faoliyat yuritadi. Ulardan
                  yarmi oliy toifali bo‘lib, 20 nafari xalqaro va milliy
                  sertifikatlarga ega.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div data-aos="fade-up" className="about-grid">
          <div className="about-card">
            <FiBookOpen className="about-icon" />
            <h3>Ta’lim Sifati</h3>
            <p>
              Har bir dars zamonaviy metodika asosida o‘tiladi, o‘quvchilarni
              fikrlashga undovchi usullar qo‘llaniladi.
            </p>
          </div>

          <div className="about-card">
            <FiUsers className="about-icon" />
            <h3>Jamoa</h3>
            <p>
              50 dan ortiq tajribali pedagoglar faoliyat yuritadi, ularning
              aksariyati xalqaro sertifikatlarga ega.
            </p>
          </div>

          <div className="about-card">
            <FaChalkboardTeacher className="about-icon" />
            <h3>To‘garaklar</h3>
            <p>
              IT, robototexnika, ingliz tili, san’at va sport yo‘nalishlarida
              muntazam to‘garaklar mavjud.
            </p>
          </div>

          <div className="about-card">
            <LuGraduationCap className="about-icon" />
            <h3>Natijalar</h3>
            <p>
              Maktab o‘quvchilari har yili respublika olimpiadalari va
              tanlovlarda yuqori o‘rinlarni egallaydilar.
            </p>
          </div>
        </div>

        <section data-aos="fade-up" className="about-additional">
          <h2>Qo'shimcha Ma'lumotlar</h2>
          <div className="about-additional-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </section>
      </div>

      <section data-aos="fade-up" className="about-values">
        <h2>Bizning Missiya va Qadriyatlar</h2>

        <div className="values-grid">
          <div className="value-item">
            <h3>Missiya</h3>
            <p>
              O‘quvchilarga zamonaviy bilim va ko‘nikmalarni berish, ularning
              ijodkorligi va tafakkurini rivojlantirib, raqobatbardosh shaxs
              sifatida voyaga yetkazish.
            </p>
          </div>

          <div className="value-item">
            <h3>Vizyon</h3>
            <p>
              Respublika miqyosida eng ilg‘or, innovatsion va natijador ta’lim
              muassasalaridan biri bo‘lish.
            </p>
          </div>

          <div className="value-item">
            <h3>Asosiy Qadriyatlar</h3>
            <ul>
              <li>🔹 Halollik va mas’uliyat</li>
              <li>🔹 Innovatsion yondashuv</li>
              <li>🔹 Har bir o‘quvchiga individual e’tibor</li>
              <li>🔹 Sifatli va samarali ta’lim</li>
            </ul>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="about-infrastructure">
        <h2>Maktab Infratuzilmasi</h2>

        <div className="infrastructure-grid">
          <div className="infrastructure-card">
            <h3>STEM Laboratoriyalari</h3>
            <p>
              Fizika, kimyo, biologiya bo‘yicha zamonaviy, xavfsiz va to‘liq
              jihozlangan laboratoriyalar mavjud.
            </p>
          </div>

          <div className="infrastructure-card">
            <h3>IT xonasi</h3>
            <p>
              30+ kompyuter, yuqori tezlikdagi internet va dasturlash bo‘yicha
              qo‘shimcha kurslar.
            </p>
          </div>

          <div className="infrastructure-card">
            <h3>Robototexnika Markazi</h3>
            <p>
              Arduino, Lego Mindstorms va boshqa zamonaviy texnologiyalar bilan
              ishlash imkoniyati.
            </p>
          </div>

          <div className="infrastructure-card">
            <h3>Sport Majmuasi</h3>
            <p>
              Katta sport zal, futbol maydoni, yengil atletika yo‘laklari va
              trenajyorlar bilan jihozlangan.
            </p>
          </div>

          <div className="infrastructure-card">
            <h3>Kutubxona</h3>
            <p>
              5000+ kitob fondi, elektron kitoblar bazasi va o‘quvchilar uchun
              qulay media zonalar.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="about-achievements">
        <h2>Yutuqlarimiz</h2>

        <ul className="achievement-list">
          <li>🏅 Respublika fan olimpiadalari – 12 ta prizyor</li>
          <li>🏅 “IT Challenge Uzbekistan” – 1-o‘rin</li>
          <li>🏅 Robototexnika musobaqalari – 3 ta g‘oliblik</li>
          <li>
            🏅 Ingliz tili bo‘yicha IELTS 6.0+ ko‘rsatkichga ega 30+ o‘quvchi
          </li>
          <li>🏅 Sport musobaqalarida 40+ sovrinli o‘rinlar</li>
        </ul>
      </section>

      <section data-aos="zoom-in" className="about-stats">
        <div className="stats-grid">
          <div className="stat-item">
            <h3>540+</h3>
            <p>O‘quvchilar</p>
          </div>

          <div className="stat-item">
            <h3>53</h3>
            <p>Malakali o‘qituvchilar</p>
          </div>

          <div className="stat-item">
            <h3>24</h3>
            <p>Sinf</p>
          </div>

          <div className="stat-item">
            <h3>20+</h3>
            <p>Xalqaro sertifikatlar</p>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="about-future">
        <h2>Kelayotgan loyihalar</h2>

        <div className="future-content">
          <p>
            Maktab yaqin yillarda ta’lim sifatini yanada oshirish maqsadida bir
            nechta yirik loyihalarni amalga oshirishni rejalashtirgan:
          </p>

          <ul>
            <li>
              🔹 Sun’iy intellekt va Data Science laboratoriyasi tashkil etish
            </li>
            <li>🔹 O‘quvchilar uchun onlayn ta’lim platformasi yaratish</li>
            <li>
              🔹 Maktab ichki ekotizimini raqamlashtirish: elektron jurnallar,
              QR tizimlar
            </li>
            <li>
              🔹 Xalqaro Cambridge va IB (International Baccalaureate)
              dasturlarini joriy etish
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default AboutSchool;

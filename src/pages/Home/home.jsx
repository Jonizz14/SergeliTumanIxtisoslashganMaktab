import React, { useEffect, useState } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GoTrophy } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoTimeOutline } from "react-icons/io5";
import { IoCalendarNumber } from "react-icons/io5";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

function Home() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [news, setNews] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [director, setDirector] = useState([]);
  const [principals, setPrincipals] = useState([]);
  const [additions, setAdditions] = useState([]);

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [classCount, setClassCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));

    fetch("http://localhost:3000/teachers")
      .then((res) => res.json())
      .then((data) => setTeachers(data));

    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));

    fetch("http://localhost:3000/news")
      .then((res) => res.json())
      .then((data) => setNews(data));

    fetch("http://localhost:3000/additions")
      .then((res) => res.json())
      .then((data) => setAdditions(data));

    fetch("http://localhost:3000/principals")
      .then((res) => res.json())
      .then((data) => setPrincipals(data));

    fetch("http://localhost:3000/anons")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }, []);

  useEffect(() => {
    const section = document.querySelector(".section");
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !started) {
          started = true;

          const duration = 6000;
          const steps = 200;
          const interval = duration / steps;

          let studentStep = students.length / steps;
          let teacherStep = teachers.length / steps;
          let classStep = classes.length / steps;

          let s = 0,
            t = 0,
            c = 0;

          const timer = setInterval(() => {
            s += studentStep;
            t += teacherStep;
            c += classStep;

            if (
              s >= students.length &&
              t >= teachers.length &&
              c >= classes.length
            ) {
              clearInterval(timer);
              setStudentCount(students.length);
              setTeacherCount(teachers.length);
              setClassCount(classes.length);
            } else {
              setStudentCount(Math.floor(s));
              setTeacherCount(Math.floor(t));
              setClassCount(Math.floor(c));
            }
          }, interval);
        }
      },
      { threshold: 0.4 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [students, teachers, classes]);

  const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1016/800/500",
    "https://picsum.photos/id/1018/800/500",
    "https://picsum.photos/id/1020/800/500",
    "https://picsum.photos/id/1021/800/500",
  ];

  return (
    <>

      <div className="welcome-container">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="welcome-swiper"
        >
          <SwiperSlide>
            <img src="/src/pages/Home/banner.jpg" alt="Banner 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/pages/Home/banner2.png" alt="Banner 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/src/pages/Home/banner3.png" alt="Banner 3" />
          </SwiperSlide>
        </Swiper>

        <div className="welcome-overlay">
          <div className="welcome-content">
            <h1 className="welcome-title">Sergeli tuman ixtisoslashgan maktabiga xush kelibsiz</h1>
            <p className="welcome-subtitle">Kelajak uchun ta'lim</p>

            <div className="features-section">
              <Link to={"/news"}>
                <button className="feature-card-primary-card">
                  <FiBookOpen size={20} />
                  <span>Maktab yangiliklari</span>
                </button>
              </Link>
              <Link to={"/teachers"}>
                <button className="feature-card-blur-card">
                  <FiUsers size={20} />
                  <span>Bizning ustozlar</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="info">
        <div className="info__container">
          <div data-aos="fade-right" className="info__image">
            <img
              src="/src/pages/Home/banner2.png"
              alt="Maktab ichki ko‘rinishi"
            />
          </div>

          <div data-aos="fade-left" className="info__content">
            <h2 className="info__title">Maktabimiz haqida umumiy ma'lumot</h2>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Sergeli tuman ixtisoslashtirilgan maktabi 2022-yilda faoliyatini
                boshlagan. Maktab aniq va tabiiy fanlarga ixtisoslashgan bo‘lib,
                ta’lim tili – o‘zbek. Shuningdek, ingliz tili (IELTS), koreys tili,
                IT va robototexnika yo‘nalishlari mavjud.
              </p>
            </div>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Ilk o‘quv yili maktab 17 ta sinfda jami 408 ta o‘quvchini qamrab
                olgan. 2023-yil sentabrda yangi bino foydalanishga topshirildi.
                Hozirda 540 o‘quvchi 24 ta sinfda tahsil olmoqda.
              </p>
            </div>

            <div className="info__row">
              <span className="info__line"></span>
              <p className="info__text">
                Bugungi kunda 53 nafar pedagog faoliyat yuritadi. Ulardan yarmi
                oliy toifali bo‘lib, 20 nafari xalqaro va milliy sertifikatlarga
                ega.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div data-aos="fade-up" className="section-div">
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <LuGraduationCap size={30} />
            </p>
            <p className="section-div-card-p1">{studentCount}</p>
            <p className="section-div-card-p2">O'quvchilar</p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiUsers size={30} />
            </p>
            <p className="section-div-card-p1">{teacherCount}</p>
            <p className="section-div-card-p2">Ustozlar</p>
          </div>
          <div className="section-div-card">
            <p className="section-div-card-icon">
              <FiBookOpen size={30} />
            </p>
            <p className="section-div-card-p1">{classCount}</p>
            <p className="section-div-card-p2">Sinflar</p>
          </div>
        </div>
      </section>
      <section className="advantages-block">
        <div data-aos="fade-up" className="advantages-wrapper">
          <div className="advantages-heading">
            <h2 className="advantages-main-title">Nega bizni tanlashadi?</h2>
            <p className="advantages-intro-text">
              Biz zamonaviy metodika va texnologiyalardan foydalangan holda sifatli ta'lim taqdim etamiz
            </p>
          </div>

          <div className="benefits-container">
            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FiUsers size={30} />
              </p>
              <h3 className="benefit-name">Tajribali o'qituvchilar</h3>
              <p className="benefit-info">
                Ko'p yillik tajribaga ega professional pedagoglar
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FiBookOpen size={30} />
              </p>
              <h3 className="benefit-name">Zamonaviy dasturlar</h3>
              <p className="benefit-info">
                Dolzarb ta'lim dasturlari va metodikalari
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <GoTrophy size={30} />
              </p>
              <h3 className="benefit-name">Yuqori natijalar</h3>
              <p className="benefit-info">
                O'quvchilarimizning a'lo darajadagi akademik yutuqlari
              </p>
            </div>

            <div className="benefit-card">
              <p className="benefit-card-icon">
                <FaRegHeart size={30} />
              </p>
              <h3 className="benefit-name">Individual yondashuv</h3>
              <p className="benefit-info">
                Har bir o'quvchiga alohida e'tibor va g'amxo'rlik
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="school-leadership-dashboard">
        <section data-aos="fade-up" className="leadership-section">
          <h2 className="leadership-title">Maktab Rahbariyati</h2>

          {principals.length > 0 && (
            <Link
              to={`/principals/${principals[0].id}`}
              state={{ person: principals[0] }}
              className="leadership-director"
              key={principals[0].id}
            >
              <img src={principals[0].photo} alt="Director" className="director-img" />
              <h3 className="leadership-name">
                {principals[0].firstName} {principals[0].lastName}
              </h3>
              <p className="leadership-position">{principals[0].position}</p>
            </Link>
          )}

          <div className="leadership-principals">
            {principals.slice(1).map((principal) => (
              <Link
                key={principal.id}
                to={`/principals/${principal.id}`}
                state={{ person: principal }}
                className="leadership-principal"
              >
                <img src={principal.photo} alt="Principal" className="principal-img" />
                <h4 className="principal-name">
                  {principal.firstName} {principal.lastName}
                </h4>
                <p className="principal-position">{principal.position}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <section data-aos="fade-up" className="bg-gray-900 py-14">
        <div className="swiper-title-bottom">
          <p className="swiper-botto-p">
            Maktab Fotogalareyasi
          </p>
        </div>
        <div data-aos="fade-" className="w-[85%] mx-auto">
          <Swiper
            loop={true}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Pagination, Autoplay]}
            className="pb-10"
          >
            {images.map((src, i) => (
              <SwiperSlide
                key={i}
                className="!w-full flex items-center justify-center"
              >
                <div className="w-full h-[230px] md:h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-xl bg-gray-800">
                  <img
                    src={src}
                    alt={`slide-${i}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section data-aos="fade-up" className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">So‘nggi yangiliklar</h2>
          <Link to="/news" className="home-section__link">Yangiliklarga o‘tish →</Link>
        </div>

        <div className="home-section__grid">
          {news.slice(0, 3).map((item) => (
            <div key={item.id} className="home-card">
              <img src={item.image} alt={item.title} className="home-card__img" />
              <div className="home-card__body">
                <h3 className="home-card__title">{item.title}</h3>
                <p className="home-card__desc">{item.description}</p>
                <div className="home-card__footer">
                  <div className="home-card__meta">
                    <IoCalendarNumber className="home-card__icon" />
                    <span>{item.date}</span>
                  </div>
                  <Link
                    to={`/news/${item.id}`}
                    state={{ news: item }}
                    className="home-card__btn"
                    aria-label={`Batafsil: ${item.title}`}
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section data-aos="fade-up" className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">E’lonlar</h2>
          <Link to="/announcements" className="home-section__link">E’lonlarga o‘tish →</Link>
        </div>

        <div className="home-section__grid">
          {announcements.slice(0, 3).map((item) => (
            <div key={item.id} className="home-card">
              <img src={item.image} alt={item.title} className="home-card__img" />
              <div className="home-card__body">
                <h3 className="home-card__title">{item.title}</h3>
                <p className="home-card__desc">{item.description}</p>
                <div className="home-card__footer">
                  <div className="home-card__meta">
                    <IoTimeOutline className="home-card__icon" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section data-aos="fade-up" className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">So‘nggi to‘garaklar</h2>
          <Link to="/addition" className="home-section__link">
            To‘garaklarga o‘tish →
          </Link>
        </div>

        <div className="home-section__grid">
          {additions.slice(0, 3).map((item) => (
            <div key={item.id} className="home-card">
              <img src={item.image} alt={item.name} className="home-card__img" />

              <div className="home-card__body">
                <h3 className="home-card__title">{item.name}</h3>
                <p className="home-card__desc">{item.description}</p>

                <div className="home-card__footer">
                  <div className="home-card__meta">
                    <FaChalkboardTeacher className="home-card__icon" />
                    <Link
                      to={`/addition/teacher/${item.teacherId}`}
                      className="teacher-text"
                    >
                      {item.teacherName}
                    </Link>
                  </div>

                  <Link
                    to="/addition/details"
                    state={{ addition: item }}
                    className="home-card__btn"
                    aria-label={`Batafsil: ${item.name}`}
                  >
                    Batafsil
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;

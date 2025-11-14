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
    bio: "UI/UX dizayn va React texnologiyasiga qiziqaman. Asosan JavaScript bilan ishlayman va JSON API hamda turli ma’lumotlar bazalari bilan integratsiya qilishni yoqtiraman. Yangi loyihalarda ishlash va o‘rganishga doim tayyorman. Men foydalanuvchi tajribasini birinchi o‘ringa qo‘yaman va har bir dizayn elementini sinchkovlik bilan ishlab chiqaman. React komponentlarini yaratish va ularni qayta ishlatishni yaxshi ko‘raman. Shuningdek, CSS animatsiyalari va zamonaviy frameworklar bilan tajriba orttirishga harakat qilaman.",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    github: "https://github.com/Jonizz14",
    telegram: "https://jonizz_devvvv.t.me/",
    skills: ["React", "JavaScript", "CSS", "UI/UX Design", "Figma", "Responsive Design"],
  },
  {
    id: 2,
    name: "Jabborov Adham",
    role: "Frontend Developer",
    bio: "React Texnalogiyasida ishlayman va UI/UX design. Asosan Javascript, Node.js va Json-Server, API hamda turli ma’lumotlar bazalari bilan integratsiya qilishni yoqtiraman. Yangi loyihalarda ishlash va o‘rganishga doim tayyorman. Men kod yozishni sevaman va har bir funksiyani optimallashtirishga e’tibor beraman. Backend bilan integratsiya qilishda tajriba orttirganman va RESTful API lar bilan ishlashni yaxshi bilaman. Jamoaviy ishda hamkorlik qilishni yoqtiraman.",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    github: "https://github.com/adhamjonjabborov07",
    telegram: "https://jabborov_0o7.t.me/",
    skills: ["React", "JavaScript", "Node.js", "JSON Server", "API Integration", "Git"],
  },
  {
    id: 3,
    name: "Buvosherov Bekzod",
    role: "Backend Developer",
    bio: "Backend rivojlanishiga qiziqaman. Node.js va Express.js bilan server tomon kod yozishni yoqtiraman. Ma’lumotlar bazalari bilan ishlash, xususan MongoDB va PostgreSQL bilan tajriba orttirganman. API yaratish va ularni xavfsiz qilishni bilaman. Mikroservis arxitekturasiga qiziqaman va katta loyihalarda ishlashni istayman. Kodni toza va o‘qilishi oson qilishga harakat qilaman.",
    img: "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png",
    github: "https://github.com/bekzod_alimov",
    telegram: "https://bekzod_alimov.t.me/",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST API", "JWT"],
  },
];

const projects = [
  {
    id: 1,
    title: "School Website",
    description: "Bu loyiha maktab uchun yaratilgan to‘liq funksional veb-sayt. U yangiliklar, o‘qituvchilar, o‘quvchilar va boshqa ma’lumotlarni o‘z ichiga oladi. Responsive dizayn va React bilan yaratilgan. Sayt foydalanuvchilarga maktab haqida to‘liq ma’lumot beradi va interaktiv elementlarga boy.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["React", "CSS", "JavaScript", "Responsive Design", "AOS Library"],
    github: "https://github.com/Jonizz14/school-website",
    live: "https://sergelitumanixtisoslashganmaktab.netlify.app",
    features: ["News Section", "Teacher Profiles", "Student Gallery", "Contact Form", "Responsive Layout", "Animation Effects", "SEO Optimization"],
    challenges: ["Cross-browser compatibility", "Performance optimization", "Accessibility"],
    duration: "3 months",
    team: "2 developers",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Onlayn do‘kon uchun yaratilgan platforma. Mahsulotlar katalogi, savat va to‘lov tizimi mavjud. Backend Node.js bilan, frontend React bilan yaratilgan. Bu loyiha real biznes ehtiyojlariga javob beradi va keng ko‘lamli foydalanish uchun mo‘ljallangan.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Express.js", "JWT", "Bcrypt"],
    github: "https://github.com/adhamjonjabborov07/ecommerce-platform",
    live: "https://ecommerce-demo.herokuapp.com",
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "User Authentication", "Admin Panel", "Order Tracking", "Inventory Management"],
    challenges: ["Security implementation", "Scalability", "Payment gateway integration"],
    duration: "4 months",
    team: "3 developers",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Vazifalarni boshqarish uchun mobil ilova. Foydalanuvchilar vazifalar yaratishi, tahrirlashi va bajarilganligini belgilashi mumkin. React Native bilan yaratilgan. Ilova productivity ni oshirish uchun mo‘ljallangan va turli qurilmalarda ishlaydi.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["React Native", "Firebase", "AsyncStorage", "Expo", "Redux", "React Navigation"],
    github: "https://github.com/bekzod_alimov/task-manager",
    live: "https://expo.dev/@bekzod_alimov/task-manager",
    features: ["Task Creation", "Categories", "Reminders", "Offline Mode", "Cloud Sync", "Priority Levels", "Due Dates"],
    challenges: ["Offline data sync", "Push notifications", "Cross-platform compatibility"],
    duration: "2 months",
    team: "1 developer",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Shaxsiy portfolio veb-sayti. Loyihalar, ko‘nikmalar va kontakt ma’lumotlari mavjud. Minimalistik dizayn va tez yuklanish uchun optimallashtirilgan. Bu sayt dizaynerlar va dasturchilar uchun namunaviy portfolio sifatida xizmat qiladi.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP Animations", "ScrollMagic", "WebGL"],
    github: "https://github.com/nilufar_karimova/portfolio",
    live: "https://nilufar-portfolio.netlify.app",
    features: ["Project Showcase", "Skills Section", "Contact Form", "Smooth Animations", "SEO Optimized", "Interactive Elements", "Dark Mode"],
    challenges: ["Animation performance", "Browser compatibility", "Loading optimization"],
    duration: "1 month",
    team: "1 designer/developer",
  },
  {
    id: 5,
    title: "Weather App",
    description: "Ob-havo ma’lumotlarini ko‘rsatuvchi ilova. Foydalanuvchilar shahar nomini kiritib ob-havo ma’lumotlarini olishlari mumkin. OpenWeatherMap API dan foydalanilgan. Ilova aniq va tezkor ma’lumot beradi.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["React", "OpenWeatherMap API", "CSS Modules", "Geolocation", "Service Workers"],
    github: "https://github.com/Jonizz14/weather-app",
    live: "https://weather-app-demo.vercel.app",
    features: ["Current Weather", "5-Day Forecast", "Geolocation", "Search by City", "Responsive Design", "Offline Support", "Weather Alerts"],
    challenges: ["API rate limiting", "Geolocation permissions", "Data caching"],
    duration: "1 month",
    team: "1 developer",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Blog yozish uchun platforma. Foydalanuvchilar maqolalar yaratishi, tahrirlashi va ulashishi mumkin. Markdown support va comment tizimi mavjud. Bu loyiha content creatorlar uchun mo‘ljallangan.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth", "Markdown"],
    github: "https://github.com/adhamjonjabborov07/blog-platform",
    live: "https://blog-platform-demo.vercel.app",
    features: ["Article Creation", "Markdown Support", "Comments", "User Authentication", "Categories", "Search", "RSS Feed"],
    challenges: ["Content management", "SEO for blogs", "Comment moderation"],
    duration: "3 months",
    team: "2 developers",
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "Jismoniy faollikni kuzatish uchun ilova. Foydalanuvchilar mashqlarni qayd etishi, progress ni ko‘rishi va maqsadlarni belgilashi mumkin. Health API lar bilan integratsiya qilingan.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["React Native", "HealthKit", "Google Fit", "SQLite", "Chart.js", "Push Notifications"],
    github: "https://github.com/bekzod_alimov/fitness-tracker",
    live: "https://expo.dev/@bekzod_alimov/fitness-tracker",
    features: ["Workout Logging", "Progress Charts", "Goal Setting", "Health Data Integration", "Reminders", "Social Sharing"],
    challenges: ["Health data privacy", "Cross-platform health APIs", "Data visualization"],
    duration: "4 months",
    team: "2 developers",
  },
  {
    id: 8,
    title: "Recipe App",
    description: "Retseptlar uchun mobil ilova. Foydalanuvchilar retseptlarni qidirishi, saqlashi va baholashi mumkin. Ingredient list va step-by-step instructions mavjud.",
    image: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium",
    technologies: ["Flutter", "Firebase", "Cloud Firestore", "Image Picker", "Flutter Local Notifications"],
    github: "https://github.com/nilufar_karimova/recipe-app",
    live: "https://recipe-app-demo.web.app",
    features: ["Recipe Search", "Favorites", "Ratings", "Shopping List", "Meal Planning", "Photo Upload", "Offline Recipes"],
    challenges: ["Recipe data sourcing", "Image optimization", "User-generated content"],
    duration: "3 months",
    team: "1 developer",
  },
];

const photographs = [
  { id: 1, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Team Meeting", caption: "Jamoa yig‘ilishi - yangi loyihalar muhokamasi" },
  { id: 2, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Coding Session", caption: "Kod yozish sessiyasi - React komponentlari ustida ishlash" },
  { id: 3, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Design Workshop", caption: "Dizayn workshop - UI/UX g'oyalarini ishlab chiqish" },
  { id: 4, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Project Presentation", caption: "Loyiha taqdimoti - mijozlarga natijalarni ko'rsatish" },
  { id: 5, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Hackathon", caption: "Hackathon tadbiri - 24 soatlik maraton dasturlash" },
  { id: 6, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Office Space", caption: "Ish joyi - zamonaviy ofis muhiti" },
  { id: 7, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Team Building", caption: "Jamoa building - sport tadbirlari" },
  { id: 8, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Conference", caption: "Konferentsiya - texnologiya yangiliklari" },
  { id: 9, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Mentorship", caption: "Mentorlik - yosh dasturchilarga yordam" },
  { id: 10, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Award Ceremony", caption: "Mukofot marosimi - muvaffaqiyatlar taqdirlanishi" },
  { id: 11, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Remote Work", caption: "Masofaviy ish - global jamoa" },
  { id: 12, src: "https://www.sap.com/design-system/fiori-design-android/ui-elements/patterns/skeleton-loading/media_1c910b2775359fa8b38eab09ba042f77ef629e9b6.png?width=750&format=png&optimize=medium", alt: "Innovation Lab", caption: "Innovatsiya labaratoriyasi - yangi g'oyalar" },
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
            Biz yangi fikrlaydigan va texnologiyaga qiziqqan jamoamiz. Hozirda o‘rganish va tajriba orttirish jarayonida bo‘lsak-da, maqsadlarimiz katta va aniq. Biz UI/UX tamoyillariga amal qilgan holda chiroyli va qulay interfeyslar yaratishga intilamiz. Jamoamizda frontend va backend dasturchilar, shuningdek UI/UX dizaynerlar mavjud. Biz har bir loyihada innovatsion yechimlar topishga harakat qilamiz.
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

            <div className="member-skills">
              <h4>Ko‘nikmalar:</h4>
              <div className="skills-list">
                {member.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

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

      <section data-aos="fade-up" className="projects-section">
        <div className="projects-container">
          <h2 className="section-title">Bizning Loyihalarimiz</h2>
          <p className="section-description">
            Quyida bizning jamoamiz tomonidan yaratilgan ba'zi loyihalar ko'rsatilgan. Har bir loyiha o'ziga xos xususiyatlarga ega va turli texnologiyalardan foydalanilgan.
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    <h4>Texnologiyalar:</h4>
                    <div className="tech-list">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-features">
                    <h4>Xususiyatlar:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-details">
                    <div className="project-detail">
                      <strong>Muddat:</strong> {project.duration}
                    </div>
                    <div className="project-detail">
                      <strong>Jamoa:</strong> {project.team}
                    </div>
                  </div>
                  <div className="project-challenges">
                    <h4>Qiyinchiliklar:</h4>
                    <ul>
                      {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link github">GitHub</a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="project-link live">Live Demo</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="photographs-section">
        <div className="photographs-container">
          <h2 className="section-title">Fotogalereya</h2>
          <p className="section-description">
            Bizning jamoamizning ish jarayoni, tadbirlar va muvaffaqiyatlaridan lavhalar. Bu rasmlar bizning kreativ va jamoaviy ish muhitini aks ettiradi.
          </p>
          <div className="photographs-grid">
            {photographs.map((photo) => (
              <div key={photo.id} className="photo-item">
                <img src={photo.src} alt={photo.alt} className="photo-image" />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="achievements-section">
        <div className="achievements-container">
          <h2 className="section-title">Muvaffaqiyatlarimiz</h2>
          <div className="achievements-list">
            <div className="achievement-item">
              <h3>Hackathon G'olibi</h3>
              <p>2023-yilda o'tkazilgan hackathon da 1-o'rinni egalladik. Loyihamiz innovatsion g'oya bilan ajralib turdi va 500 dan ortiq ishtirokchi orasida g'olib bo'ldik.</p>
            </div>
            <div className="achievement-item">
              <h3>Open Source Hisse</h3>
              <p>Bizning ba'zi loyihalarimiz open source bo'lib, GitHub da minglab yulduz to'plagan. Bu bizning kodimizning sifatini va foydaliligini ko'rsatadi.</p>
            </div>
            <div className="achievement-item">
              <h3>Klientlar bilan Hamkorlik</h3>
              <p>Bir nechta kompaniyalar bilan hamkorlik qilib, ular uchun veb-ilovalar yaratdik. Bizning mijozlarimiz orasida startup lar va katta korporatsiyalar bor.</p>
            </div>
            <div className="achievement-item">
              <h3>Ta'lim dasturlari</h3>
              <p>Yosh dasturchilarga mentorship berib, ularni rivojlantirishda yordam berdik. 50 dan ortiq talabaga dasturlash asoslarini o'rgatdik.</p>
            </div>
            <div className="achievement-item">
              <h3>Tech Konferentsiyalar</h3>
              <p>Turli tech konferentsiyalarda ishtirok etib, ma'ruzalar o'qidik. Bizning tajribalarimiz boshqa dasturchilarga foyda berdi.</p>
            </div>
            <div className="achievement-item">
              <h3>Award-winning Designs</h3>
              <p>Bizning UI/UX dizaynlarimiz bir nechta dizayn tanlovlarida mukofotga sazovor bo'ldi. Kreativlik va funksionallikni birlashtirish muvaffaqiyat kaliti.</p>
            </div>
            <div className="achievement-item">
              <h3>Community Building</h3>
              <p>Lokal dasturchilar jamoasini tashkil qildik. Har oy uchrashuvlar o'tkazib, bilim almashamiz va networking qilamiz.</p>
            </div>
            <div className="achievement-item">
              <h3>Publication in Tech Blogs</h3>
              <p>Bizning maqolalarimiz tech bloglarda chop etildi. Dasturlash va dizayn haqida bilimlarimizni ulashamiz.</p>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">Biz bilan Bog'laning</h2>
          <p className="section-description">
            Agar siz bilan hamkorlik qilishni istasangiz yoki savollaringiz bo'lsa, quyidagi havolalar orqali biz bilan bog'laning.
          </p>
          <div className="contact-links">
            <a href="https://github.com/Jonizz14" target="_blank" rel="noreferrer" className="contact-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://jonizz_devvvv.t.me/" target="_blank" rel="noreferrer" className="contact-link">
              <FaTelegramPlane /> Telegram
            </a>
            <a href="https://uzbpjoni@gmail.com" className="contact-link">
              Email
            </a>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="project-info-section">
        <div className="project-info-inner">
          <h2 className="project-info-title">Loyiha haqida</h2>
          <p className="project-info-text">
            Ushbu loyiha g‘oyasi dastlab bizning o‘qituvchimiz tomonidan berilgan kichik topshiriq sifatida boshlangan edi. Keyinchalik biz uni yanada kengaytirib, mustaqil ravishda jamoaviy ishga aylantirdik. Maqsadimiz – foydalanuvchilarga qulay, chiroyli va zamonaviy web interfeyslar taqdim etishdir. Biz har bir loyihada foydalanuvchi ehtiyojlarini birinchi o‘ringa qo‘yamiz.
          </p>
          <p className="project-info-text">
            Har bir dizayn elementi foydalanuvchi tajribasini yaxshilashga qaratilgan. Bu loyiha orqali biz React komponentlar arxitekturasi va UI tamoyillarini chuqurroq o‘rgandik. Shuningdek, jamoaviy ish, kod review va agile metodologiyalarini qo‘lladik. Bizning workflowimizda Scrum metodologiyasidan foydalanamiz va har hafta sprint review o‘tkazamiz.
          </p>
          <p className="project-info-text">
            Bizning jamoamiz doimo yangi texnologiyalarni o‘rganishga va ularni amaliyotda qo‘llashga intiladi. Har bir loyiha uchun eng yaxshi yechimlarni topishga harakat qilamiz. Kelajakda bizning maqsadimiz – katta miqyosdagi loyihalarda ishtirok etish va o‘z sohamizda yetakchi bo‘lish. Biz open source hamjamiyatiga hissa qo‘shishni va bilimlarimizni ulashishni muhim deb bilamiz.
          </p>
          <p className="project-info-text">
            Loyihamizning rivojlanish jarayonida biz turli qiyinchiliklarga duch keldik. Masalan, cross-browser compatibility, performance optimization va accessibility masalalari. Har bir muammoni hal qilish orqali biz o‘sib, professional bo‘lib bordik. Hozirda bizning kodimiz clean, maintainable va scalable.
          </p>
          <p className="project-info-text">
            Bizning jamoamizda diversity muhim o‘rin tutadi. Har bir a'zo o‘z sohasida expert bo‘lib, bir-birimizni to‘ldirib turamiz. Frontend dasturchilar, backend dasturchilar va dizaynerlar birgalikda ishlaydi. Bu bizga comprehensive yechimlar yaratish imkonini beradi.
          </p>
          <p className="project-info-text">
            Kelajak rejalariimiz orasida AI va machine learning texnologiyalarini integratsiya qilish, mobile app development ga kirishish va international mijozlar bilan ishlash mavjud. Biz doimo o‘sishda va yangi imkoniyatlarni izlaymiz.
          </p>
          <div className="project-meta-info">
            <div className="project-meta-item">
              <strong>G‘oya:</strong> UI/UX dizaynni amaliy o‘rganish va jamoaviy ish tajribasi orttirish
            </div>
            <div className="project-meta-item">
              <strong>Texnologiyalar:</strong> React, CSS, JavaScript, Responsive Design, Node.js, MongoDB, Firebase, Git
            </div>
            <div className="project-meta-item">
              <strong>Reja:</strong> Loyihani keyinchalik real jamoaviy platformaga aylantirish va startup ga o‘tkazish
            </div>
            <div className="project-meta-item">
              <strong>Jamoa:</strong> 4 kishi (2 Frontend, 1 Backend, 1 UI/UX Designer)
            </div>
            <div className="project-meta-item">
              <strong>Muddat:</strong> 8 oy (davom etmoqda, monthly updates)
            </div>
            <div className="project-meta-item">
              <strong>Metodologiya:</strong> Agile/Scrum, Code Reviews, Continuous Integration
            </div>
            <div className="project-meta-item">
              <strong>Maqsad:</strong> 1000+ foydalanuvchi, open source contributions, client projects
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

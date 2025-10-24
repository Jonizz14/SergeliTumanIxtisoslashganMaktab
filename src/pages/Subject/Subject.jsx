import React from 'react'
import './Subject.css'

function Subject() {
    const subjects = [
        {
            category: "Asosiy fanlar",
            items: [
                {
                    name: "Matematika",
                    img: "/images/math.png",
                    desc: "Mantiqiy fikrlashni rivojlantiruvchi, barcha fanlar uchun asos bo‘lgan fan.",
                },
                {
                    name: "Ona tili va adabiyot",
                    img: "/images/language.png",
                    desc: "Til boyligi, yozma va og‘zaki nutq madaniyatini shakllantiradi.",
                },
                {
                    name: "Ingliz tili",
                    img: "/images/english.png",
                    desc: "Xalqaro muloqot va ta’lim imkoniyatlarini kengaytiradi.",
                },
                {
                    name: "Tarix",
                    img: "/images/history.png",
                    desc: "O‘tmishdan saboq olib, kelajakni anglashga yordam beradi.",
                },
                {
                    name: "Geografiya",
                    img: "/images/geography.png",
                    desc: "Dunyo mamlakatlari va tabiat hodisalarini o‘rganadi.",
                },
                {
                    name: "Fizika",
                    img: "/images/physics.png",
                    desc: "Tabiat qonunlarini va energiya harakatini tushuntiradi.",
                },
                {
                    name: "Kimyo",
                    img: "/images/chemistry.png",
                    desc: "Moddalar tuzilishi va ularning o‘zaro ta’sirini o‘rgatadi.",
                },
                {
                    name: "Biologiya",
                    img: "/images/biology.png",
                    desc: "Tirik organizmlar, ularning tuzilishi va hayoti haqida fan.",
                },
            ],
        },
        {
            category: "Tabiiy (STEM) fanlar",
            items: [
                {
                    name: "Informatika / Dasturlash",
                    img: "/images/it.png",
                    desc: "Zamonaviy texnologiyalar va kodlash asoslarini o‘rgatadi.",
                },
                {
                    name: "Texnologiya va mehnat",
                    img: "/images/tech.png",
                    desc: "Amaliy ko‘nikmalarni shakllantiruvchi fan.",
                },
            ],
        },
        {
            category: "Gumanitar fanlar",
            items: [
                {
                    name: "Falsafa / Axloq",
                    img: "/images/philosophy.png",
                    desc: "Insoniyat, axloq va tafakkur asoslarini o‘rgatadi.",
                },
                {
                    name: "Huquq asoslari",
                    img: "/images/law.png",
                    desc: "Jamiyat qonunlari va fuqarolik mas’uliyatini anglatadi.",
                },
                {
                    name: "San’at va musiqa",
                    img: "/images/art.png",
                    desc: "Ijodkorlik va estetik didni rivojlantiruvchi fanlar.",
                },
            ],
        },
    ];
    return (
        <>
            <div className="text-align-center">
                <p className="news-section-p1">Maktabimiz Fanlari</p>
                <p className="news-section-p2">
                    Maktabimizdagi asosiy va tabiiy fanlar ro'yxati
                </p>
            </div>
            {subjects.map((section, idx) => (
                <div key={idx} className="section">
                    <p className="section-title">{section.category}</p>
                    <div className="subjects-grid">
                        {section.items.map((subj, i) => (
                            <div key={i} className="card">
                                <img src={subj.img} alt={subj.name} className="card-img" />
                                <p className="card-name">{subj.name}</p>
                                <div className="card-desc-hover">{subj.desc}</div>
                                <div className="card-desc-mobile">{subj.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default Subject

import React, { useRef } from "react";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form yuborildi!");
    };

    return (
        <>
            <div className="text-align-center">
                <p className="news-section-p1">Biz bilan bog'lanish</p>
                <p className="news-section-p2">
                    Savol va takliflaringiz bo'lsa, bemalol murojaat qiling!
                </p>
            </div>
            <div className="contact-page">

                <div className="contact-container">
                    <div className="contact-info">
                        <p>
                            <strong>Telefon:</strong> <br /> +998 98 989 99 99
                        </p>
                        <p>
                            <strong>Elektron pochta:</strong> <br /> dasturbek.com@gmail.com
                        </p>
                        <p>
                            <strong>Manzil:</strong> <br />
                            Sergeli tumani, Nilufar MFY <br />
                            Sergeli 2-mavzesi, 64A-uy
                        </p>
                        <p>
                            <strong>Diqqat:</strong> <br />
                            Agar saytning biror qismi to‘g‘ri ishlamayotgan bo‘lsa, sahifa umuman
                            ochilmasa yoki ishlash jarayonida kutilmagan xatolik paydo bo‘lsa —
                            iltimos, bizga bu haqda xabar bering. Sizning fikr va xabaringiz saytni
                            yanada yaxshilashimizga yordam beradi.
                        </p>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="contact-form">
                        <h3>Savolingiz bormi?</h3>

                        <input
                            type="text"
                            name="user_name"
                            placeholder="To‘liq ism-familyangiz"
                            required
                        />

                        <input
                            type="tel"
                            name="user_phone"
                            placeholder="Telefon raqamingiz"
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Murojaat mavzusi (qisqa)"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Savol va takliflaringizni yozing"
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit">Yuborish</button>
                    </form>

                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d551.5804135650701!2d69.2218422139766!3d41.210502803385936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61c403191f6d%3A0xc8199e959d144b2e!2sSergeli%20ixtisoslashtirilgan%20maktab!5e0!3m2!1sru!2s!4v1758799393697!5m2!1sru!2s"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "/src/pages/TeachersAdditionsDetails/TeachersAdditionsDetails.css";
import { FaInstagram, FaTelegram, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function TeachersAdditionsDetails() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchTeacherFromAddition = async () => {
      try {
        const res = await fetch(`http://localhost:3000/additions`);
        const data = await res.json();
        const foundAddition = data.find(
          (item) => item.teacherId === parseInt(id)
        );

        if (foundAddition) {
          setTeacher({
            name: foundAddition.teacherName,
            photo: foundAddition.teacherPhoto,
            bio: foundAddition.teacherBiography || "Biografiya hali qo‘shilmagan.",
            socials: foundAddition.social || {},
            subject: foundAddition.teacherSubject || null,
          });
        } else {
          setTeacher(null);
        }
      } catch (err) {
        setTeacher(null);
      }
    };

    fetchTeacherFromAddition();
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  if (!teacher) {
    return (
      <div className="teachers-additions-details">
        <p>Ustoz topilmadi.</p>
        <Link to="/addition" className="teachers-additions-details__breadcrumb-link">
          ⬅ To'garaklarga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="teachers-additions-details">
      <div className="teachers-additions-details__breadcrumb">
        <Link to="/addition" className="teachers-additions-details__breadcrumb-link">
          To‘garaklar
        </Link>
        <span className="teachers-additions-details__breadcrumb-separator">/</span>
        <span className="teachers-additions-details__breadcrumb-current">{teacher.name}</span>
      </div>

      <img
        src={teacher.photo}
        alt={teacher.name}
        className="teachers-additions-details__img"
      />

      <h2 className="teachers-additions-details__title">{teacher.name}</h2>
      <p className="teachers-additions-details__subject">{teacher.subject}</p>

      <div className="teachers-additions-details__info">
        <p>
          <strong>Biografiya:</strong>
        </p>
        <p>{teacher.bio}</p>
      </div>

      <div className="teachers-additions-details__social-wrapper">
        {teacher.socials?.instagram && (
          <a
            href={teacher.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="teachers-additions-details__social-btn teachers-additions-details__social-btn--instagram"
          >
            <FaInstagram />
          </a>
        )}
        {teacher.socials?.telegram && (
          <a
            href={teacher.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="teachers-additions-details__social-btn teachers-additions-details__social-btn--telegram"
          >
            <FaTelegram />
          </a>
        )}
        {teacher.socials?.facebook && (
          <a
            href={teacher.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="teachers-additions-details__social-btn teachers-additions-details__social-btn--facebook"
          >
            <FaFacebook />
          </a>
        )}
      </div>
    </div>
  );
}

export default TeachersAdditionsDetails;


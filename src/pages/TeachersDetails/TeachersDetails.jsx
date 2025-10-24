import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "/src/pages/TeachersDetails/TeachersDetails.css";

function TeacherDetails() {
  const location = useLocation();
  const teacher = location.state?.teacher;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!teacher) {
    return (
      <div className="teacherdetails">
        <p>Ustoz topilmadi.</p>
        <Link to="/teachers" className="breadcrumb-link">
          ⬅ Ustozlarga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="teacherdetails">
      <div className="breadcrumb">
        <Link to="/teachers" className="breadcrumb-link">Ustozlar</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">
          {teacher.firstName} {teacher.lastName}
        </span>
      </div>

      <img
        src={teacher.photo}
        alt={`${teacher.firstName} ${teacher.lastName}`}
        className="teacherdetails-img"
      />

      <h2 className="teacherdetails-title">
        {teacher.firstName} {teacher.lastName}
      </h2>
      <p className="teacherdetails-subject">{teacher.subject}</p>

      <div className="teacherdetails-info">
        <p><strong>Biografiya:</strong></p>
        <p>{teacher.biography || "Biografiya hali qo‘shilmagan."}</p>
      </div>

    </div>
  );
}

export default TeacherDetails;

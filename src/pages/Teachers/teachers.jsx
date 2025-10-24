import React, { useEffect, useState } from "react";
import "./teachers.css";
import { useNavigate } from "react-router-dom";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const res = await fetch("http://localhost:3000/teachers");
        const data = await res.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };
    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = `${teacher.firstName} ${teacher.lastName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleNavigate = (teacher) => {
    navigate(`/teachers/${teacher.id}`, { state: { teacher } });
  };

  const handleKeyDown = (e, teacher) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate(teacher);
    }
  };

  return (
    <>
      <section className="main-section">
        <div className="teachers-section">
          <p className="teachers-section-p1">Bizning ustozlar</p>
          <p className="teachers-section-p2">
            Bizning professional o'qituvchilar jamoamiz bilan tanishing
          </p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              placeholder="Fan yoki ism bo'yicha qidiring"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="reset"
              type="button"
              onClick={() => setSearchTerm("")}
            >
              ✕
            </button>
          </form>
        </div>

        <section className="teachers-grid">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="teacher-card"
                onClick={() => handleNavigate(teacher)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, teacher)}
              >
                <img
                  src={teacher.photo}
                  alt={`${teacher.firstName} ${teacher.lastName}`}
                />
                <h3>
                  {teacher.firstName} {teacher.lastName}
                </h3>
                <p className="subject">{teacher.subject}</p>
                <p>{teacher.email}</p>
                <p>{teacher.phone}</p>
              </div>
            ))
          ) : (
            <p className="no-result">So'rovingiz bo'yicha hech narsa topilmadi.</p>
          )}
        </section>
      </section>
    </>
  );
}

export default Teachers;

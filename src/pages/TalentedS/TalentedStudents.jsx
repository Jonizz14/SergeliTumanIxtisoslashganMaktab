import React, { useEffect, useState } from "react";
import "./TalentedStudents.css";
import { useNavigate } from "react-router-dom";

function TalentedStudents() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("http://localhost:3000/talentedStudents");
        const data = await res.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching talented students:", error);
      }
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });


  const handleKeyDown = (e, student) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate(student);
    }
  };

  return (
    <>
      <section className="main-section">
        <div className="talented-section">
          <p className="talented-section-p1">Iqtidorli o‘quvchilar</p>
          <p className="talented-section-p2">
            Bizning maktabdagi iqtidorli o‘quvchilar bilan tanishing
          </p>

          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              placeholder="Ism yoki familiya bo‘yicha qidiring"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="reset"
                type="button"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </form>
        </div>

        <section className="talented-grid">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div
                key={student.id}
                className="talented-card"
                onClick={() => handleNavigate(student)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => handleKeyDown(e, student)}
              >
                <img
                  src={student.image}
                  alt={`${student.firstName} ${student.lastName}`}
                />
                <h3>
                  {student.firstName} {student.lastName}
                </h3>
                <p className="subject">Iqtidorli o‘quvchi</p>
                <p>{student.biography.slice(0, 80)}...</p>
              </div>
            ))
          ) : (
            <p className="no-result">So‘rovingiz bo‘yicha hech narsa topilmadi.</p>
          )}
        </section>
      </section>
    </>
  );
}

export default TalentedStudents;

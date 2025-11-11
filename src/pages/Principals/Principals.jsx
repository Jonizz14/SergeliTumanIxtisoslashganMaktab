import React, { useEffect, useState } from "react";
import "./Principals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Principals() {
  const [principals, setPrincipals] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      offset: 100,
      disable: window.innerWidth <= 768 ? true : false,
    });

    fetch("http://localhost:3000/principals")
      .then((res) => res.json())
      .then((data) => setPrincipals(data));
  }, []);

  return (
    <div className="school-leadership-dashboard">
      <section data-aos="fade-up" className="leadership-section">
        <h2 className="leadership-title">Maktab Rahbariyati</h2>

        {principals.length > 0 && (
          <div className="leadership-director" data-aos="zoom-in">
            <img
              src={principals[0].photo}
              alt="Director"
              className="director-img"
            />
            <h3 className="leadership-name">
              {principals[0].firstName} {principals[0].lastName}
            </h3>
            <p className="leadership-position">{principals[0].position}</p>
            <p className="leadership-experience">
              Tajriba: {principals[0].experience} yil
            </p>
          </div>
        )}

        <div className="leadership-principals">
          {principals.slice(1).map((principal) => (
            <Link
              key={principal.id}
              to={`/principals/${principal.id}`}
              state={{ person: principal }}
              data-aos="fade-up"
              className="leadership-principal"
            >
              <img
                src={principal.photo}
                alt={principal.firstName}
                className="principal-img"
              />
              <h4 className="principal-name">
                {principal.firstName} {principal.lastName}
              </h4>
              <p className="principal-position">{principal.position}</p>
              <p className="principal-experience">
                Tajriba: {principal.experience} yil
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Principals;

import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "/src/pages/AdditionDetails/AdditionDetails.css";

function AdditionDetails() {
    const location = useLocation();
    const addition = location.state?.addition;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!addition) {
        return (
            <div className="additiondetails">
                <p>Maʼlumot topilmadi.</p>
                <Link to="/addition" className="breadcrumb-link">
                    ⬅ To‘garaklarga qaytish
                </Link>
            </div>
        );
    }

    return (
        <div className="additiondetails">
            <div className="breadcrumb">
                <Link to="/addition" className="breadcrumb-link">To‘garaklar</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{addition.name}</span>
            </div>

            <img src={addition.image} alt={addition.name} className="additiondetails-img" />

            <h2 className="additiondetails-title">{addition.name}</h2>
            <p className="additiondetails-teacher">
                <strong>Ustoz:</strong>{" "}
                <Link to={`/addition/teacher/${addition.teacherId}`} className="teacher-link">
                    {addition.teacherName}
                </Link>
            </p>
            <p className="additiondetails-desc">{addition.description}</p>

            <div className="additiondetails-footer">
                <span className="additiondetails-date">{addition.date}</span>
            </div>
        </div>
    );
}

export default AdditionDetails;

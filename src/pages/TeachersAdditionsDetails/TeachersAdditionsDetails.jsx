import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "/src/pages/TeachersDetails/TeachersDetails.css";

function TeachersAdditionsDetails() {
    const { id } = useParams();
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchTeacherFromAddition = async () => {
            try {
                const res = await fetch(`http://localhost:3000/additions`);
                const data = await res.json();
                const foundAddition = data.find(item => item.teacherId === parseInt(id));

                if (foundAddition) {
                    setTeacher({
                        name: foundAddition.teacherName,
                        photo: foundAddition.teacherPhoto,
                        bio: foundAddition.teacherBiography || "Biografiya hali qo‘shilmagan."
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

    if (!teacher) {
        return (
            <div className="teacherdetails">
                <p>Ustoz topilmadi.</p>
                <Link to="/addition" className="breadcrumb-link">
                    ⬅ To'garaklarga qaytish
                </Link>
            </div>
        );
    }

    return (
        <div className="teacherdetails">
            <div className="breadcrumb">
                <Link to="/addition" className="breadcrumb-link">To‘garaklar</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{teacher.name}</span>
            </div>

            <img src={teacher.photo} alt={teacher.name} className="teacherdetails-img" />

            <h2 className="teacherdetails-title">{teacher.name}</h2>

            <div className="teacherdetails-info">
                <p><strong>Biografiya:</strong></p>
                <p>{teacher.bio}</p>
            </div>
        </div>
    );
}

export default TeachersAdditionsDetails;

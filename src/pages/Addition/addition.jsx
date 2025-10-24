import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import "/src/pages/Addition/addition.css";

function Addition() {
    const [additions, setAdditions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchAdditions = async () => {
            try {
                const res = await fetch("http://localhost:3000/additions");
                const data = await res.json();
                setAdditions(data);
            } catch (err) {
                console.error("Xato:", err);
            }
        };

        fetchAdditions();
    }, []);

    const filteredAdditions = additions.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="addition-section">
            <p className="addition-section-p1">To'garaklar</p>
            <p className="addition-section-p2">
                Maktabimizdagi tashkil etilgan to'garaklar
            </p>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="input"
                    placeholder="To'garaklarni qidirish..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

            <div className="addition-list">
                {filteredAdditions.map((item) => (
                    <div key={item.id} className="addition-card">
                        <img src={item.image} alt={item.name} />
                        <div className="addition-card-header">
                            <h3>{item.name}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className="addition-card-footer">
                            <div className="addition-date">
                                <FaChalkboardTeacher className="time-icon" />
                                <Link
                                    to={`/addition/teacher/${item.teacherId}`}
                                    className="teacher-text"
                                >
                                    {item.teacherName}
                                </Link>
                            </div>

                            <Link
                                to="/addition/details"
                                state={{ addition: item }}
                                className="detail-link"
                            >
                                Batafsil
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Addition;

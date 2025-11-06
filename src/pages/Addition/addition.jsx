import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "/src/pages/Addition/addition.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Addition() {
    const [additions, setAdditions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);

    const [bookmarked, setBookmarked] = useState(() => {
        return JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
    });

    useEffect(() => {
        localStorage.setItem("bookmarkedNews", JSON.stringify(bookmarked));
    }, [bookmarked]);

    const [sortOption, setSortOption] = useState("all");

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

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleBookmark = (id) => {
        setBookmarked((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    let filteredAdditions = additions.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (showOnlyBookmarked) {
        filteredAdditions = filteredAdditions.filter((item) =>
            bookmarked.includes(item.id)
        );
    }


    return (
        <div data-aos="fade-up" className="addition-section">
            <p className="addition-section-p1">To‘garaklar</p>
            <p className="addition-section-p2">
                Maktabimizdagi tashkil etilgan to‘garaklar
            </p>

            <div className="addition-controls">
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="input"
                        placeholder="To‘garaklarni qidirish..."
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </form>

                <button
                    className={`bookmark-filter-btn ${filteredAdditions.length && bookmarked.length ? "active" : ""}`}
                    onClick={() => setShowOnlyBookmarked((prev) => !prev)}
                >
                    {showOnlyBookmarked ? <BsBookmarkFill size={22} /> : <BsBookmark size={22} />}
                </button>

            </div>

            <div data-aos="fade-up" className="addition-list">
                {filteredAdditions.map((item) => (
                    <div key={item.id} className="addition-card">
                        <div className="addition-image-wrapper">
                            <img src={item.image} alt={item.name} />

                            <button
                                className="bookmark-btn"
                                onClick={() => toggleBookmark(item.id)}
                            >
                                {bookmarked.includes(item.id) ? (
                                    <BsBookmarkFill className="bookmark-icon active" />
                                ) : (
                                    <BsBookmark className="bookmark-icon" />
                                )}
                            </button>
                        </div>

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

            {filteredAdditions.length === 0 && (
                <p className="no-additions">To‘garak topilmadi.</p>
            )}
        </div>
    );
}

export default Addition;
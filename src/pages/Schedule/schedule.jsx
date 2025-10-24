import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./schedule.css";

function Schedule() {
  const [htmlTable, setHtmlTable] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const loadExcel = async () => {
    try {
      const response = await fetch("/src/pages/Schedule/adres.xlsx");
      const arrayBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const html = XLSX.utils.sheet_to_html(worksheet, { editable: false });
      setHtmlTable(html);
      setShowTable(true);
    } catch (err) {
      console.error("Excel faylni ochishda xato:", err);
    }
  };

  const hideTable = () => {
    setShowTable(false);
    setHtmlTable("");
  };

  return (
    <div className="schedule-container">
      <p className="news-section-p1">Darslar jadvali</p>
      <p className="news-section-p2">
        Sinf va haftaning kuni bo'yicha darslar jadvali
      </p>

      {isMobile ? (
        <a
          href="/src/pages/Schedule/adres.xlsx"
          download="darslar-jadvali.xlsx"
          className="schedule-btn"
        >
          📥 Jadvalni yuklab olish
        </a>
      ) : (
        <>
          {!showTable ? (
            <button onClick={loadExcel} className="schedule-btn">
              Jadvalni ko‘rish
            </button>
          ) : (
            <button onClick={hideTable} className="schedule-btn">
              Jadvalni berkitish
            </button>
          )}
        </>
      )}

      {showTable && !isMobile && (
        <div
          className="schedule-viewer"
          dangerouslySetInnerHTML={{ __html: htmlTable }}
        />
      )}
    </div>
  );
}

export default Schedule;

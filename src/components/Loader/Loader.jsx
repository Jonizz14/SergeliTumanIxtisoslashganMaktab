import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img id="fade-up" src="/src/components/Header/logo.svg" alt="" />
      <p id="fade-up" className="loader-text">Sergeli Tuman Ixtisoslashgan Maktab</p>
      <div id="fade-up" className="loader"></div>
      <p id="fade-up" className="loading-info">
        Yuklanmoqda<span className="dots"><span>.</span><span>.</span><span>.</span></span>
      </p>
    </div>
  );
};

export default Loader;

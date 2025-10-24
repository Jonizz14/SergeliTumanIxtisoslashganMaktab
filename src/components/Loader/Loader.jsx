import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src="/src/components/Header/logo.svg" alt="" />
      <p className="loader-text">Sergeli Tuman Ixtisoslashgan maktab</p>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;

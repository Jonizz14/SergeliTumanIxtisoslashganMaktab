// this fucking piece of shit wrote by jonizz don't try read it because it's fuck yourself, tg username @jonizz_devvvv
// this fucking code wrote by notarius tg username poxuymasmi

import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Loader from "./components/Loader/Loader";
import Home from "./pages/Home/home";
import News from "./pages/News/news";
import Teachers from "./pages/Teachers/teachers";
import Schedule from "./pages/Schedule/schedule";
import Announcements from "./pages/Announcements/announcements";
import AdditionDetails from "./pages/AdditionDetails/AdditionDetails";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import Addition from "./pages/Addition/addition";
import TeacherDetails from "./pages/TeachersDetails/TeachersDetails";
import Noutfound from "./pages/Notfound/notfound";
import TeachersAdditionsDetails from "./pages/TeachersAdditionsDetails/TeachersAdditionsDetails";
import HomePrincipalsDetails from "./pages/HomePrincipalsDetails/HomePrincipalsDetails";
import OurCommand from "./pages/OurCommand/OurCommand";
import Contact from "./pages/Contact/contact";
import Chat from "./components/Chat/Chat"; 
import TalentedStudents from "./pages/TalentedS/TalentedStudents";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const mainPages = [
    "/",
    "/news",
    "/teachers",
    "/schedule",
    "/announcements",
    "/addition",
    "/contact",
    '/talentedstudents'
  ];

  useEffect(() => {
    const beforeUnloadHandler = () => {
      localStorage.removeItem("visitedPages");
    };
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () => window.removeEventListener("beforeunload", beforeUnloadHandler);
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const storedPages = JSON.parse(localStorage.getItem("visitedPages")) || {};

    if (!mainPages.includes(path)) {
      setLoading(false);
      return;
    }

    if (storedPages[path]) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const preloadImages = () => {
      const images = Array.from(document.images);
      return Promise.all(
        images.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) resolve();
              else {
                img.onload = img.onerror = resolve;
              }
            })
        )
      );
    };

    const checkNetworkSpeed = () => {
      const start = performance.now();
      return fetch("https://via.placeholder.com/50x50.png?rand=" + Math.random(), {
        cache: "no-cache",
      })
        .then(() => performance.now() - start)
        .then((ms) => {
          if (ms < 400) return "fast";
          if (ms < 1000) return "medium";
          return "slow";
        })
        .catch(() => "slow");
    };

    Promise.all([preloadImages(), checkNetworkSpeed()]).then(([_, speed]) => {
      let minDelay = 1000;
      if (speed === "medium") minDelay = 1800;
      if (speed === "slow") minDelay = 3000;

      setTimeout(() => {
        setLoading(false);
        const updated = { ...storedPages, [path]: true };
        localStorage.setItem("visitedPages", JSON.stringify(updated));
      }, minDelay);
    });
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="page-preloader">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/chat" element={<Layout><Chat /></Layout>} />
        <Route path="/news" element={<Layout><News /></Layout>} />
        <Route path="/news/:id" element={<Layout><NewsDetails /></Layout>} />
        <Route path="/teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/teachers/:id" element={<Layout><TeacherDetails /></Layout>} />
        <Route path="/principals/:id" element={<Layout><HomePrincipalsDetails /></Layout>} />
        <Route path="/addition/teacher/:id" element={<Layout><TeachersAdditionsDetails /></Layout>} />
        <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
        <Route path="/ourcommand" element={<Layout><OurCommand /></Layout>} />
        <Route path="/addition/details" element={<Layout><AdditionDetails /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/announcements" element={<Layout><Announcements /></Layout>} />
        <Route path="/addition" element={<Layout><Addition /></Layout>} />
        <Route path="*" element={<Layout><Noutfound /></Layout>} />
        <Route path="/talentedstudents" element={<Layout><TalentedStudents/></Layout>} />
        
      </Routes>
      <Chat />
    </>
  );
}

export default App;

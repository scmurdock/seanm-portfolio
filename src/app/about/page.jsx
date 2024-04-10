/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

function About() {
  // Set the initial state to true to show the popup immediately
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];

  return (
    <div>
      <Navbar
        options={[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/uses", label: "Uses" },
        ]}
      />
     <Footer links={links} />
    </div>
  );
}

export default About;

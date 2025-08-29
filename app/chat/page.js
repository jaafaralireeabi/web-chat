"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chat.css";
import {
  faRightFromBracket,
  faPlus,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal";
import ProfileImg from "../components/profileImg";

export default function Chat() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (theme === "dark") {
        document.body.classList.remove("light");
      } else {
        document.body.classList.add("light");
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div dir="rtl">
      <Modal />
      <nav>
        <div className="profile">
          <ProfileImg />
          <div className="uList">
            <div className="darkMode" onClick={toggleTheme}>
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </div>
            <div className="logOut">
              <a href="./">
                <FontAwesomeIcon icon={faRightFromBracket} />
              </a>
            </div>
          </div>
        </div>
        <div className="chats">
          <div className="newChat">
            <FontAwesomeIcon icon={faPlus} />
            <p>محادثة جديدة</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

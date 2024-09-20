"use client"
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun,faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }; 
  return (
      <div className="darkMode" onClick={toggleTheme}>
      {theme==='dark'? 
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>:<FontAwesomeIcon icon={faMoon} />}
      </div>
  );
}
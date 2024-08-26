"use client"
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chat.css"
import { faRightFromBracket, faPlus, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal";


export default function Chat({imgUrl="images/profile.jpg"}) {
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
      if (theme === 'dark') {
        document.body.classList.remove('light');
      } else {
        document.body.classList.add('light');
      }
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return(
        <html suppressHydrationWarning>
        <body dir="rtl" >
            <Modal></Modal>
            <nav>
                <div className="profile">
                    <img src={imgUrl} alt="no image"></img>
                    <div className="uList">
                        <div className="darkMode" onClick={toggleTheme}>
                            {theme==='dark'? 
                            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>:<FontAwesomeIcon icon={faMoon} />}
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
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                        <p>محادثة جديدة</p>
                    </div>
                </div>
            </nav>
        </body>
        </html>
    );
}
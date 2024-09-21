import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chat.css"
import { faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal";
import DarkMode from "../components/darkMode";
import DbConnect from "../../scripts/seed";
import { pool } from "../../scripts/seed";

export default function Chat({ imgUrl="images/profile1.jpg"}) {
    return(
        <html suppressHydrationWarning>
            <body dir="rtl">
            <Modal></Modal>
            <nav>
                <div className="profile">
                    <img src={imgUrl} alt="no image"></img>
                    <div className="uList">
                        <DarkMode />
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

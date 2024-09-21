import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./chat.css"
import { faRightFromBracket, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal";
import DarkMode from "../components/darkMode";

export default function ChatPage({ params }) {
    const { chatId } = params; // if you need to extract chatId or other params
    const imgUrl = "images/profile1.jpg"; // default image URL

    return (
        <html suppressHydrationWarning>
            <body dir="rtl">
                <Modal />
                <nav>
                    <div className="profile">
                        <img src={imgUrl} alt="Profile" />
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
                            <FontAwesomeIcon icon={faPlus} />
                            <p>محادثة جديدة</p>
                        </div>
                    </div>
                </nav>
            </body>
        </html>
    );
}

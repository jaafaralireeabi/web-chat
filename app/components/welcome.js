import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Welcome({text="أهلاً وسهلاً"}) {
    return(
        <div className="welcome">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            <h1>{text}</h1>
        </div>
    );
}


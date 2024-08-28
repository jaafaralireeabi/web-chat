import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";

export default function EmailInput() {
  return (
    <div className="email">
      <FontAwesomeIcon icon={faEnvelope} />
      <input name="email" type="email" placeholder="عنوان البريد الالكتروني" required></input>
      <span className="">
        <FontAwesomeIcon icon={faQrcode} />
      </span>
    </div>
  );
}

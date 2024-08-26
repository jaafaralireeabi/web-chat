import styles from "../page.module.css";
import Welcome from "../components/welcome.js";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function singup() {
  return (
    <body dir="rtl">
      <main className={styles.main}>
        <form>
          <Welcome></Welcome>

          <EmailInput></EmailInput>
          <div className="userName">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="اسم المستخدم"></input>
          </div>

          <PasswordInput></PasswordInput>
          <PasswordInput placeholder={"تأكيد كلمة المرور"}></PasswordInput>
          <input type="submit" value="تسجيل"></input>
        </form>
        <div className="register">
            <p className="">لديك حساب فعلاً؟</p>
            <a href="./" className="login">
              تسجيل الدخول
            </a>
        </div>
      </main>
    </body>
  );
}

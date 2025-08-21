import styles from "../page.module.css";
import Welcome from "../components/welcome";
import EmailInput from "../components/emailInput";

export default function Otp() {
    const resendStyle = {
        color: "var(--main-color)",
        };
  return (
    <body dir="rtl">
      <main className={styles.main}>
        <form>
          <Welcome text="التحقق من الرابط"></Welcome>
          <EmailInput placeholder={"abc@gamil.com"}></EmailInput>
          <div className="reSnde" style={resendStyle}>
            <a href="">اضغط الزر ادناه لأعادة ارسال الرابط</a>
          </div>
          <input type="submit" value="ارسال الرابط"></input>
        </form>
        <div className="register">
          <p className="">تم التحقق من الرابط؟</p>
          <a href="./" className="login">
            تسجيل الدخول
          </a>
        </div>
      </main>
    </body>
  );
}

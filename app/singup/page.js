import styles from "../page.module.css";
import Welcome from "../components/welcome";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { pool } from "../../scripts/seed";
import DbConnect from "../../scripts/seed";
import { redirect } from "next/navigation";


export default async function singup() {
  DbConnect();
  //insert to ACCOUNTES TABLE
  async function createAccount (data) {
    "use server";
      let id = parseInt(Math.random() * 1000);
      let email = data.get("email")?.valueOf();
      let userName = data.get("username")?.valueOf();
      let password = data.get("password")?.valueOf();
      try {
        const newAccount = await pool.query(
          "INSERT INTO accounts(acc_id,email,username,password) VALUES($1,$2,$3,$4);",
          [id, email, userName, password]
        );
        console.log(newAccount.rows[0]);
      } catch (err) {
        console.log(err);
      }
      redirect("../"+data);
  }
  return (
    <body dir="rtl">
      <main className={styles.main}>
        <form method="GET" action={createAccount}>
          <Welcome></Welcome>
          <EmailInput></EmailInput>
          <div className="userName">
            <FontAwesomeIcon icon={faUser} />
            <input
              name="username"
              type="text"
              placeholder="اسم المستخدم"
            ></input>
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

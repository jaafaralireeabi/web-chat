import Image from "next/image";
import styles from "./page.module.css";
import PasswordInput from "./components/passwordInput.js";
import Welcome from "./components/welcome.js";
import EmailInput from "./components/emailInput.js";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export default function Home() {
  const cookieStore = cookies();

  const email = cookieStore.get("email")?.value;
  const password = cookieStore.get("password")?.value;
  const userName = cookieStore.get("userName")?.value;

  if (email && password && userName) {
    redirect("/chat");
  }  
  
  return (
      <body dir="rtl">
        <main className={styles.main}>
          <form method="" action="/chat">
            <Welcome></Welcome>
            <EmailInput></EmailInput>
            <PasswordInput></PasswordInput>
            <a className="forgot" href="/otp">
              نسيت كلمة المرور؟
            </a>
            <input type="submit" value="تسجيل الدخول"></input>
          </form>
          <div className="register">
            <p className="">سجل هنا؟</p>
            <a href="/singup" className="singUp">
              اشتراك
            </a>
          </div>
        </main>
      </body>

);
}

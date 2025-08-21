'use client';

import styles from "../page.module.css";
import Welcome from "../components/welcome";
import EmailInput from "../components/emailInput";
import PasswordInput from "../components/passwordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { createAccount } from "../actions/createAccount"; // 🔸 استيراد الدالة
export default function SignupPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.querySelector(".email input")?.value;
    const password = document.querySelector(".password input")?.value;
    const userName = document.querySelector(".userName input")?.value;

    if (email && password) {
      document.cookie = `email=${email}; path=/`;
      document.cookie = `password=${password}; path=/`;
      document.cookie = `userName=${userName}; path=/`;
    }

    const formData = new FormData(e.target);
    await createAccount(formData);
  };
  return (
    <body dir="rtl">
      <main className={styles.main}>
        <form onSubmit={handleSubmit}> {/* 🔸 استخدم الدالة مباشرة هنا */}
          <Welcome />
          <EmailInput className="email"/>
          <div className="userName">
            <FontAwesomeIcon icon={faUser} />
            <input
              name="username"
              type="text"
              placeholder="اسم المستخدم"
              />
          </div>
          <PasswordInput/>
          <PasswordInput className="password" placeholder="تأكيد كلمة المرور" />
          <input type="submit" value="تسجيل" />
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
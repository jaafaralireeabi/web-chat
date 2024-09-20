import styles from "./page.module.css";
import DbConnect from "../scripts/seed.js";
import { pool } from "../scripts/seed.js";
import LoginPage from "./login";

export default function Home() {
  DbConnect();
  async function getId (password) {
    "use server";
    console.log("use ser");
    try {
      const newAccount = await pool.query(
        "SELECT * FROM accounts WHERE password="+password
      );
      console.log(newAccount.rows[0]);
    } catch (err) {
      console.log(err);
    }
    return id;
  }
  return (
      <body dir="rtl">
        <main className={styles.main}>
          <LoginPage></LoginPage>
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
'use server';

import { pool } from "../../scripts/seed";
import { redirect } from "next/navigation";

export async function createAccount(data) {
  console.log("create account");

  const id = parseInt(Math.random() * 1000);
  const email = data.get("email")?.valueOf();
  const userName = data.get("username")?.valueOf();
  const password = data.get("password")?.valueOf();

  try {
    const newAccount = await pool.query(
      "INSERT INTO accounts(acc_id,email,username,password) VALUES($1,$2,$3,$4);",
      [id, email, userName, password]
    );
    console.log(newAccount.rows[0]);
  } catch (err) {
    console.log(err);
  }redirect(`/addProfileImage`);
}
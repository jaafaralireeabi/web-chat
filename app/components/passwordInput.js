"use client";
import { Html } from "next/document";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,
    faQrcode,
  } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput({placeholder="كلمة المرور"}) {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="password">
      <FontAwesomeIcon icon={faLock} />
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        onChange={(e) => setPassword(e.target.value)}
        required
      ></input>
      <span
        className="password-toggle-icon"
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <FontAwesomeIcon visible icon={faEye} />
        ) : (
          <FontAwesomeIcon visible icon={faEyeSlash} />
        )}
      </span>
    </div>
  );
}

"use client";
import React, { useState } from "react";

export default function Modal({ imgUrl = "images/profile1.jpg", userName = "جعفر", email = "jaafar@gamil.com" }) {
  const [modal, setModal] = useState(true);

  if (!modal) return null;

  return (
    <>
      <div className="overlay"></div>
      <div className="card">
        <h1>الملف الشخصي</h1>
        <div className="row">
          <img src={imgUrl} alt="User profile" />
          <div className="name">
            <h2>{userName}</h2>
            <p>{email}</p>
          </div>
        </div>
        <div className="close" onClick={() => setModal(false)}>
          اغلاق
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: #1b1e20;
          z-index: 200;
          position: fixed;
          color: #fff;
          width: 400px;
          height: auto;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          padding: 20px;
          border-radius: 10px;
        }

        .card h1 {
          color: #3b3e3f;
        }

        .card img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .card .row {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          gap: 20px;
          margin: 20px;
        }

        .card .row .name {
          width: 100%;
        }

        .card .close {
          cursor: pointer;
          background-color: #fff;
          color: #000;
          font-weight: bold;
          padding: 10px;
          width: fit-content;
          border-radius: 5px;
          margin-top: 20px;
        }

        .overlay {
          /* Add styles for overlay if needed */
        }
      `}</style>
    </>
  );
}

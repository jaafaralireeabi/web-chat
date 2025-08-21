"use client"
import React, { useState } from "react";
import "./modal.css";
import { getCookie } from "../actions/getCookie"

export default function Modal({imgUrl=getCookie("imageProfile"),userName=getCookie('userName'),email=getCookie('email')}) {
  const [modal,setModal] = useState(true);
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const imageProfile = document.querySelector(".imageProfile input")?.value;
      const email = document.querySelector(".email input")?.value;
      const password = document.querySelector(".password input")?.value;
      const userName = document.querySelector(".userName input")?.value;
  
      if (email && password) {
        document.cookie = `imageProfile=${imageProfile}; path=/`;
        document.cookie = `email=${email}; path=/`;
        document.cookie = `password=${password}; path=/`;
        document.cookie = `userName=${userName}; path=/`;
      }
  
      const formData = new FormData(e.target);
      await createAccount(formData);
    };
  return(
    <>
    {
    modal?
    <>
    <div className="overlay" ></div>
      <div className="card">
              <h1>الملف الشخصي</h1>
              <div className="row">
                <div>
                  <img src={imgUrl} alt=""></img>
                  <label for="fileUpload" class="custom-file-button">أختر صورة للملف الشخصي</label>
                  <input type="file" className="imageProfile" id="fileUpload" style={{display: "none"}} onSubmit={handleSubmit}></input>
                  
                </div>
                  <div className="name">
                      <h2 className="">{userName}</h2>
                      <p className="">{email}</p>
                  </div>
              </div>
              <div className="close" onClick={(e)=>setModal(false)}>
                  اغلاق
              </div>
          </div>
    </>
          :<></>
    }
    </>
  );
}
"use client"
import React, { useState } from "react";
import "./modal.css";


export default function Modal({imgUrl="images/profile.jpg",userName="جعفر",email="jaafar@gamil.com"}) {
  const [modal,setModal] = useState(true);
  return(
    <>
    {
    modal?
    <>
    <div className="overlay" ></div>
      <div className="card">
              <h1>الملف الشخصي</h1>
              <div className="row">
                  <img src={imgUrl} alt=""></img>
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
import React, { useState } from "react";
import {Routes, Route, Link} from 'react-router-dom'
import LoginPage from "./LoginPage";
import login from '../images/login.png'
import page from '../images/page.png'
import frame from '../images/frame.png'
import ForgotPassword from "./ForgotPassword";
import EmailVerification from "./EmailVerification";
import ResetPassword from "./ResetPassword";


function Login() {
  
const [email, setEmail]= useState("");

  return (
    <div className="flex flex-row items-center justify-around mt-16">
      <div className="flex flex-col items-center">
        <img src={login} alt="icon" />
        <img src={page} alt="icon" />
      </div>

      <div>
        <div className="flex flex-row items-center">
          <img src={frame} alt="icon" className="mr-4" />
          <p
            style={{
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "28.13px",
            }}
          >
            Manufacturing Inventory System
          </p>
        </div>
        <div>
       <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/forgott" element={<ForgotPassword email={email} setEmail={setEmail}/>}/>
        <Route path="/emailVerification" element={<EmailVerification email={email}  />}/>
        <Route path="/resetPassword" element={<ResetPassword  />}/>
       </Routes>
        </div>
      </div>
    </div>
  );
}

export default Login;

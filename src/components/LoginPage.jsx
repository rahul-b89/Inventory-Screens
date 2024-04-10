import React, { useState } from "react";
import user from "../images/user.png";
import lock from "../images/lock.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="mt-3">
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "28px",
          lineHeight: "41px",
        }}
      >
        Welcome!
      </p>
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        Enter your Email ID and Password to access your account.
      </p>
      <div className="flex flex-col">
        <div className="relative mt-4 mb-4 ">
          <input
            type="email"
            placeholder="Email ID"
            className="p-2 border border-gray-400 rounded-md pl-10 w-full "
            style={{ borderRadius: "8px" }}
            value={email}
            onChange={handleEmailChange}
          />
          <img
            src={user}
            alt="email-icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <div className="relative mt-2">
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-400 rounded-md pl-10 w-full"
            style={{ borderRadius: "8px" }}
            value={password}
            onChange={handlePasswordChange}
          />
          <img
            src={lock}
            alt="email-icon"
            className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center mt-2">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
              style={{
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "14px",
              }}
            >
              Remember me
            </label>
          </div>
          <div>
            <Link to="/user/forgott">
              <div
                className="flex justify-end"
                style={{
                  color: "#2CAE66",
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "14px",
                  textDecoration: "underline",
                }}
              >
                Forgot Password
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="mt-6 w-full"
          style={{
            backgroundColor: email && password ? "#2CAE66" : "#B3B3B3",
            borderRadius: "8px",
            height: "42px",
            color: "white",
            fontWeight: "500",
            fontSize: "14px",
          }}
          disabled={!email || !password}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;

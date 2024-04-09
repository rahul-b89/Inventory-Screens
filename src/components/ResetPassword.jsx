import React, {useState} from 'react'
import lock from '../images/lock.png'
import { Link } from 'react-router-dom';
import arrow from '../images/arrow-left.png'

function ResetPassword() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
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
          Reset Password.
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
          }}
        >
          Ensure your new password is unique from previous ones.
        </p>
        <div className="flex flex-col">
          <div className="relative mt-4 mb-4 ">
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-400 rounded-md pl-10 w-full "
              style={{ borderRadius: "8px" }}
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={lock}
              alt="lock-icon"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
          <div className="relative mt-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 border border-gray-400 rounded-md pl-10 w-full"
              style={{ borderRadius: "8px" }}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <img
              src={lock}
              alt="email-icon"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
         
        </div>
        <div>
          <Link to="/user/login">
          <button
            type="submit"
            className="mt-6 w-full"
            style={{
              backgroundColor: confirmPassword && password ? "#2CAE66" : "#B3B3B3",
              borderRadius: "8px",
              height: "42px",
              color: "white",
              fontWeight: "500",
              fontSize: "14px",
            }}
            disabled={!confirmPassword || !password}
          >
            Save
          </button>
          </Link>
        </div>
        <div>
          <Link to="/user/login">
            <div
              className="mt-3 flex flex-row items-center"
              style={{
                color: "#2CAE66",
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "14px",
              }}
            >
                <img src={arrow} alt=""/>
             <p className="ml-2">  Back to Login</p>
            </div>
          </Link>
        </div>
      </div>
    );
}

export default ResetPassword
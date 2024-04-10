import React, {useState} from "react";
import { Link } from "react-router-dom";
import arrow from '../images/arrow-left.png'


function EmailVerification({ email }) {

    const [otp, setOtp]=useState("");
    const handleOtpChange = (event) => {
        setOtp(event.target.value);
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
        Verify your Email?
      </p>
      <p
        style={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        Please enter the otp sent to {email}.
      </p>
      <div className="flex flex-col">
        <div className="relative mt-4 mb-4 ">
          <input
            type="number"
            placeholder="OTP"
            className="p-2 border border-gray-400 rounded-md pl-10 w-full "
            style={{ borderRadius: "8px" }}
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
      </div>
      <div>
      <Link to="/user/resetPassword">
        <button
          type="submit"
          className="mt-6 w-full"
          style={{
            backgroundColor: otp ? "#2CAE66" : "#B3B3B3",
            borderRadius: "8px",
            height: "42px",
            color: "white",
            fontWeight: "500",
            fontSize: "14px",
          }}
          disabled={!email}
        >
          Submit
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

export default EmailVerification;

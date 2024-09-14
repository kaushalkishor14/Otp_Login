import React, { useState } from "react";
import OtpInput from "./otp_input";

function OtpFrom() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // phone validations

    const regex = /[^0-9]/g;

    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("please enter valid number");

      return;
    }

    // cll api
    // show oTP INPUT
    setOtp(true); // for test
  };

  const handlePhoneSubmit = (e) => {
    setPhoneNumber(e.target.value);
  };


  const onOtpSubmit = (otp) => {
    console.log("Login successful with otp", otp);
  };

  return (
    <div className="text-black flex justify-center flex-col ">
      {!otp ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneSubmit}
            placeholder="Enter your phone number"
            className="border rounded-md border-black p-2 text-sm font-light items-center w-[200px]  "
          />
          <button
            type="submit"
            className="border border-blue-400 rounded-md  p-2 text-sm  bg-blue-600 text-white ml-4 w-[100px] hover:bg-blue-800 "
          >
            Submit
          </button>
        </form>
      ) : (
        <div>
          <p className="font-normal text-base">
            {" "}
            Enter OTP sent to {phoneNumber}
          </p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}

export default OtpFrom;

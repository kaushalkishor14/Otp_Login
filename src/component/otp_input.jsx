import React, { useEffect, useRef, useState } from "react";

function OtpInput({ length = 4, onOtpSubmit }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  console.log(inputRefs);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];

    // allowing only numbers
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    //  move to next input field if current input is filed
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);



    // if any empty input field, move focus to previous
    if(index >0  && !otp[index-1]){
        inputRefs.current[otp.indexOf("")].focus()
        
    }

    // const nextEmptyIndex = otp.findIndex((val) => val === "");

    // // Focus on the next empty field if it's available
    // if (nextEmptyIndex !== -1 && nextEmptyIndex !== index) {
    //   inputRefs.current[nextEmptyIndex]?.focus();
    // } else {
    //   inputRefs.current[index].focus();
    // }
  };

  

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      index > 0 &&
      !otp[index] &&
      inputRefs.current[index - 1]
    ) {
      //  move focus to previous input field if current input is empty
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            type="text"
            value={value}
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(e) => handleChange(e, index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-[40px] h-[40px] border m-5px rounded-sm  border-black text-base
                 text-center ml-4 mt-2  text-black"
          />
        );
      })}
    </div>
  );
}

export default OtpInput;

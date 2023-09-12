import React from "react";

function Button({ label, iconUrl, backgroundColor, borderColor, textColor,fullWidth }) {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor?backgroundColor:"bg-coral-red"} ${fullWidth?"w-full":""} rounded-full ${textColor?textColor:"text-white"}  ${borderColor?borderColor:"border-coral-red"}`}>
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow-right-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;

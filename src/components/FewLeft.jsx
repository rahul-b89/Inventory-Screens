import React from 'react'

function FewLeft() {
  return (
    <div className='flex flex-row'>
    <div
      className="border border-solid flex justify-center items-center"
      style={{
        backgroundColor: "#FFF3ED",
        borderRadius: "100px",
        height: "30px",
        width: "78px",
      }}
    >
       
      <p
        style={{
          color: "#CB4E0E",
          fontSize: "14px",
          fontFamily: "Roboto",
          fontWeight: "500",
          lineHeight: "22px",
        }}
      >
        Few Left!{" "}
      </p>
    </div>
    <img src="./timer.png" alt="icon" style={{height:"14px", width:"14px"}} />
    </div>
  )
}

export default FewLeft
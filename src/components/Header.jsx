/*in this file we are making the header of our website header contains the image of Almabetter logo and by toggeling the dark mode button it will change its color between white and black*/
import React from "react";
import logo from "../assets/download.png";

const Header = (props) => {

  return (
    <>
      <div className= {`shadow-lg  ${props.mode} flex`} >
        <img className=" pt-3 pb-2 ml-5 h-20 w-auto " src={logo} alt="logo" />
        <h1 className="text-slate-100 ml-0 m-3 text-5xl font-normal" style={{ color: props.mode === "white" ? "black" : "white" }}>maBetter</h1> {/*here we are changing modes by defining color using ternary operator*/}
      </div>
    </> 
  );
};

export default Header;
import React from "react";
import profilepic from "../Asset/pngwing.com.png";
import "../Component/nav.css";
import "./Pages/LoginPage.css";
import { Button } from "antd";

const Logininfo = ({setDeliverydevisions, setloginforms,loginfo}) => {



   const  handlechange =()=>{
       loginfo(false)
       setloginforms(true)


   }
   const  handlecontinoue =()=>{
     setDeliverydevisions(true)
    loginfo(false)

   }


  return (
    <div className="loginconfirm">
      <div className="  flex-bt brh-loginconfirm">
        <div className=" flex" style={{ width: "25%" }}>
          <img src={profilepic} alt="profile Pic" width="70px" />
          <div className="text_h">Mukil</div>
            <Button onClick={()=>{handlechange()}} className="pad1">Change</Button>
        </div>
        <div className="flex_c">
            <Button onClick={()=>{handlecontinoue()}}>Continue</Button>
        </div>
      </div>
    </div>
  );
};

export default Logininfo;
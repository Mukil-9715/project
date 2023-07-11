import React from "react";
import { Card } from "antd";
import "./nav.css";
// import { useEffect, useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Cards = ({ scafoldData }) => {
  // debugger;
  const navigate = useNavigate()

  return (
    <div className="card">
      {scafoldData.map((e) => {
        return (
          <div>
            {/* // <div> */}
            <Card
              className="cad"
              hoverable
              style={{
                width: 240,
                height: 350,
                marginInline: "auto",
                objectFit: "contain",
              }}
            
            cover={<img  className="img" alt="example" src={e.image} />}
            >
              {/* </div> */}
              <div>
                <Meta title={e.name} />
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

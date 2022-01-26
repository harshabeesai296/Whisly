import React from "react";
import "./BodySection1.css";
import banner from "../../img/newbarrel.png";

export default function BodySection1() {
  return (
    <>
      <div className="body-section1">
        <div className="body-section1-left">
          <div className="content-left">
            <p style={{ color: "#cebd86", textAlign: "left" }}>WHISLY</p>
            <h1 style={{ color: "white", textAlign: "left" }}>
              GLOBAL{" "}
              <span style={{ color: "#cebd86", textAlign: "left" }}>
                MARKETPLACE
              </span>
            </h1>
            <h1 style={{ color: "white", textAlign: "left" }}>
              FOR WHISKY CASK
            </h1>
            <h1 style={{ color: "white", textAlign: "left" }}>INVESTMENT</h1>
            <div className="button1">
              <button>GET STARTED</button>
            </div>
          </div>
        </div>
        <div className="body-section1-right">
          <img
            src={banner}
            alt="barrel"
            style={{ height: "650px", width: "360px", marginTop: "100px" }}
          ></img>
        </div>
      </div>
    </>
  );
}

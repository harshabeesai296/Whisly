import React from "react";
import "../BodySection7/BodySection7.css";

export default function BodySection7() {
  return (
    <div className="body-section7">
      <div>
        <h1>Contact Us</h1>
      </div>

      <div className="sec7rl">
        <div className="sec7-left">
          <h3>Have A Question Or Want To Sell Your Cask To Us?</h3>
          <p>
            We Welcome All Feedback And First-Grade Inventory To Be Added To
            Whisly. Drop Us An Email And We Will Be In Touch With You.
          </p>
          <p>Info@Whisly.Com</p>
        </div>
        <div className="sec7-right">
          <span>
            <input placeholder="Abc@Xyz.com"></input>
          </span>
          <span>
            <button>SUBSCRIBE</button>
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../components/BodySection2/BodySection2.css";

export default function BodySection2() {
  return (
    <div className="body-section2">
      <div className="section2-toptext">
        <p style={{ textAlign: "center", color: "white" }}>
          Introducing the Future of Tech-Driven and Transparent
        </p>
        <h2 style={{ textAlign: "center", color: "#cebd86" }}>
          Whisky Cask Trading
        </h2>
      </div>

      <div className="sec2-content">
        <div className="body-section2-left">
          <h1 style={{ textAlign: "left", color: "#cebd86" }}>
            The Future Has Arrived.
          </h1>
          <p style={{ textAlign: "left", color: "white" }}>
            You Deserve The Best Return On Your Investment -- This Is Why We
            Developed Whisly, The Newest And Easiest Way To Invest In Rare,
            Premium Whisky Casks In The Modern Age. Digitally Native,Whisky Is
            Designed To Bring Promising Returns* To Fulfil Your Investment
            Ambitions In Short, Medium And Long Terms.
          </p>

          <p style={{ textAlign: "left", color: "white" }}>
            Each And Every Cask Presented By Whisly Has Been Carefully Selected
            By Our Experts, With Official Documents Tokenized As NFTs On The
            Blockchain.
          </p>
        </div>

        <div className="body-section2-right">
          <div>
            <h1
              style={{ textAlign: "left", color: "#cebd86", fontSize: "75px" }}
            >
              +564%
            </h1>
            <h4 style={{ textAlign: "left", color: "#cebd86" }}>
              Growth Of Rare Whisky Prices Over The Past Decade
            </h4>
            <p style={{ textAlign: "left", color: "white" }}>
              -Knight Frank Luxury Investment Index
            </p>
          </div>
          <div>
            <h1
              style={{ textAlign: "left", color: "#cebd86", fontSize: "75px" }}
            >
              Millennial
            </h1>
            <h4 style={{ textAlign: "left", color: "#cebd86" }}>
              Property And Whiskey Are Millennial Top Investment Choices
            </h4>
            <p style={{ textAlign: "left", color: "white" }}>
              - Whisky Cask Market Overview August 2020
            </p>
          </div>
        </div>
      </div>
      <div className="button2">
        <button>ENTER MARKETPLACE</button>
      </div>
    </div>
  );
}

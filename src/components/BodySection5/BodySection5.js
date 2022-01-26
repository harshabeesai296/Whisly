import React from "react";
import "../../components/BodySection5/BodySection5.css";
import casks from "../../img/barrelsnew.png";

export default function BodySection5() {
  return (
    <div className="body-section5">
      <div className="section5-toptext">
        <h1 style={{ color: "#cebd86" }}>How To Trading?</h1>
      </div>

      <div className="sec5-content">
        <div className="body-section5-left">
          <img
            src={casks}
            alt="casks"
            style={{
              height: "800px",
              width: "400px",
              marginLeft: "50%",
              marginTop: "50%",
            }}
          ></img>
        </div>

        <div className="body-section5-right">
          <div>
            <h3
              style={{ textAlign: "left", color: "#cebd86", fontSize: "25px" }}
            >
              Create Truly Unique Casks With The NFTs You Own
            </h3>
            <p style={{ textAlign: "left", color: "white" }}>
              {" "}
              <span style={{ textAlign: "left", color: "#cebd86" }}>
                {" "}
                -{">"}
              </span>{" "}
              Marry Existing NFTs With Whisky - Whisly Allows The Possibility Of
              Having NFTs Owned By You Be Associated With A Cask.
            </p>
            <p style={{ textAlign: "left", color: "white" }}>
              The NFT Can Be Printed On To The Cask On Chain, And Eventually,
              The Bottle Labels.
            </p>
            <p style={{ textAlign: "left", color: "white" }}>
              <span style={{ textAlign: "left", color: "#cebd86" }}>
                {" "}
                -{">"}
              </span>{" "}
              Please Contact Us To Discuss On Chain Crossover Options.
            </p>
          </div>
          <div className="button5">
            <button>TRADE ON OPENSEA NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

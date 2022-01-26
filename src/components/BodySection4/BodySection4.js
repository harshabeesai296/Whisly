import React from "react";
import "../../components/BodySection4/BodySection4.css";

export default function BodySection4() {
  return (
    <div className="body-section4">
      <div className="section4-toptext">
        <h1 style={{ color: "#cebd86" }}>
          Enjoy Unlimited Upside On Your Investment
        </h1>
      </div>

      <div className="sec4-content">
        <div className="body-section4-left">
          <p style={{ textAlign: "left", color: "white" }}>
            Each Cask Available On Whisly Has Been Carefully Hand-picked By
            Whisky Investment Experts To Ensure Strong Upside Potential And High
            Investment Grading
          </p>

          <p style={{ textAlign: "left", color: "white" }}>
            Whilst NFT Owners Are Entitled To Full Naming And Bottling Rights Of
            Their Casks. At Any Time, Marry Your Existing NFTs * (E.G.
            Cryptopunks, Bored Ape Yacht Club , Etc.) To Create A Bespoke
            Crossover Cask That Is Truly Unique To Your Identity. Bottling
            Whisky With The NFTs You Own Is Just A Few Clicks Away.
          </p>

          <p style={{ textAlign: "left", color: "#cebd86" }}>
            *Please Contact Whisly To Discuss On-chain Crossover Options.
          </p>
        </div>

        <div className="body-section4-right">
          <div>
            <h1
              style={{ textAlign: "left", color: "#cebd86", fontSize: "25px" }}
            >
              The Drop
            </h1>
            <h4 style={{ textAlign: "left", color: "white" }}>Q1 2022:</h4>
            <p style={{ textAlign: "left", color: "white" }}>
              5 Casks Including Benriach, Craigellachie And Caol Ila In Various
              Cask Types And Price Ranges.
            </p>
          </div>
          <div>
            <h4 style={{ textAlign: "left", color: "white" }}>Q2 2022:</h4>
            <h4 style={{ textAlign: "left", color: "white" }}>
              10 Casks Including Linkwood, Ardmore, Aberlour.
            </h4>
            <h4 style={{ textAlign: "left", color: "white" }}>Q3-Q4 2022:</h4>
            <p style={{ textAlign: "left", color: "white" }}>
              A Total Of 50 Premium Casks Will Be Available.
            </p>
          </div>
        </div>
      </div>
      <div className="button4">
        <button>VIEW INVENTORY LIST</button>
      </div>
    </div>
  );
}

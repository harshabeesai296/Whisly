import React from "react";
import "../../components/BodySection3/BodySection3.css";
import p1 from "../../img/num1.png";
import p2 from "../../img/num2.png";
import fc1 from "../../img/flowchartnew.png";
import fc2 from "../../img/flowchart-2cont.png";

export default function BodySection3() {
  return (
    <div className="body-section3">
      <div className="sec3-header">
        <h1
          style={{
            textAlign: "left",
            color: "#cebd86",
            textAlign: "center",
            marginTop: "25%",
          }}
        >
          How It Works?
        </h1>
      </div>

      <div className="sec3-arrows">
        <span style={{ color: "#cebd86", textAlign: "left", fontSize: "30px" }}>
          Whisly NFT &nbsp;
        </span>
        <span style={{ color: "white", textAlign: "left", fontSize: "30px" }}>
          -----------{">"} &nbsp;
        </span>
        <span style={{ color: "#cebd86", textAlign: "left", fontSize: "30px" }}>
          Cask Ownership&nbsp;
        </span>
        <span style={{ color: "white", textAlign: "left", fontSize: "30px" }}>
          -----------{">"}&nbsp;
        </span>
        <span style={{ color: "#cebd86", textAlign: "left", fontSize: "30px" }}>
          Botteling Rights
        </span>
      </div>

      <div className="sec3-pointers">
        <div className="p1">
          <span>
            {" "}
            <img src={p1} alt="p1"></img>
          </span>
          <span style={{ color: "white", textAlign: "left", fontSize: "20px" }}>
            Invest And Trade With NFT
          </span>
        </div>
        <div className="p2">
          <span>
            {" "}
            <img src={p2} alt="p2"></img>
          </span>
          <span style={{ color: "white", textAlign: "left", fontSize: "20px" }}>
            Exit As Casks Or Bottle Anytime
          </span>
        </div>
      </div>

      <div className="sec3-header2">
        <h4
          style={{
            textAlign: "left",
            color: "#cebd86",
            textAlign: "center",
            marginTop: "7%",
          }}
        >
          Whisly NFTs Can Be Easily Traded. As The Casks Mature, Popularity
          Evolves.
        </h4>
      </div>

      <div className="sec3-flow-chart1">
        <img
          src={fc1}
          alt="trade-flow-chart"
          style={{ height: "400px", width: "225px" }}
        ></img>

        <h4
          style={{
            color: "#cebd86",
            textAlign: "center",
            marginTop: "7%",
          }}
        >
          Global NFT Marketplace
        </h4>
      </div>

      <div className="sec3-flow-chart2">
        <img
          src={fc2}
          alt="trade-flow-chart"
          style={{ height: "300px", width: "1000px" }}
        ></img>
      </div>

      <div className="sec3-fc2-text">
        <div className="sec3-p1-text">
          <p
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            At Any Time,Whisly NFT Owners Can Choose To Exit By Requesting An
            Ownership Transfer And Access To Physical Certifications &
            Documents.
          </p>

          <p
            style={{
              textAlign: "left",
              color: "white",
              marginLeft: "-18%",
            }}
          >
            The NFTs Will Then Be Destroyed.
          </p>

          <p
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            Whisly Charges A Standard Fee @ 20% Of Market Value Of The Cask For
            The Official Ownership Transfer And NFT Destroy Process.
          </p>
        </div>
        <div className="sec3-p2-text">
          <p
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            Whilst NFT Owners Can Also Choose To Bottle Their Casks Using A
            Crossover Design With Other NFTs They Own.
          </p>
        </div>
        <div className="sec3-p3-text">
          <p
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            Whisly Owns All Casks With Official Documentation Fully Digitized On
            Blockchain As NFT*
          </p>

          <p
            style={{
              textAlign: "left",
              color: "white",
            }}
          >
            All Whisly Casks Are Tokenized And Made Available For Trade.
          </p>
        </div>
      </div>

      <div className="sec3-footnotes">
        <h4
          style={{
            color: "#cebd86",
            textAlign: "center",
            marginTop: "5%",
          }}
        >
          *Whisky Casks Securely Stored In Bonded Warehouses In Scotland.
          Inventory Regularly Audited And Verified.
        </h4>
      </div>

      <div className="sec3-foot-button">
        <button>READ MORE</button>
      </div>
    </div>
  );
}

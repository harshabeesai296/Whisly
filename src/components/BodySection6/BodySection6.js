import React from "react";
import "../BodySection6/BodySection6.css";

export default function BodySection6() {
  return (
    <div className="body-section6">
      <div className="sec6-text">
        <h4 style={{ textAlign: "center", color: "#FFFBE7" }}>
          All inventory are securely stored in HMRC approved bonded warehouses.
          Documents fully verified by Whisly and available for access by NFT{" "}
          owners 24/7/365.
        </h4>
      </div>
      <div className="sec6-buttons">
        <button>VIEW VERIFICATION DETAIL</button>
        <button>CHECK MY CASK DOCUMENTS</button>
      </div>
    </div>
  );
}

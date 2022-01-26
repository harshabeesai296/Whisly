import React from "react";
import "../Footer/Footer.css";
import whislyLogo from "../../img/footerlogo.png";
import instaLogo from "../../img/newinst.png";
import twitterLogo from "../../img/newtw.png";

export default function Footer() {
  return (
    <div className="footersection">
      <div className="logo-logotext">
        <div className="whisly-logo-footer">
          <img src={whislyLogo} alt="whisly-logo"></img>
        </div>

        <div>
          <p style={{ textAlign: "left" }}>
            Global Marketplace For Whisky Cask Investment
          </p>
        </div>
      </div>

      <div className="navigation">
        <nav className="navbar">
          <div className="navItem">
            <a href="/">Home</a>
          </div>
          <div className="navItem">
            <a href="/invest">Invest</a>
          </div>
          <div className="navItem">
            <a href="/how-it-works">How It Works</a>
          </div>
          <div className="navItem">
            <a href="/casks">Casks</a>
          </div>
          <div className="navItem">
            <a href="/nfts">NFTs</a>
          </div>
          <div className="navItem">
            <a href="/faq">FAQ</a>
          </div>
        </nav>
      </div>

      <div className="social-media">
        <div>
          <img
            src={instaLogo}
            alt="whisly-logo"
            style={{ height: "50px", width: "50px" }}
          ></img>
        </div>
        <div>
          <img
            src={twitterLogo}
            alt="whisly-logo"
            style={{ height: "50px", width: "50px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

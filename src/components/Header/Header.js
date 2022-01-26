import React from "react";
import "./Header.css";
import whislyLogo from "../../img/Headerwhisly.png";
import instaLogo from "../../img/newinst.png";
import twitterLogo from "../../img/newtw.png";

function Header() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="header-section">
      <div className="whisly-logo">
        <img src={whislyLogo} alt="whisly-logo"></img>
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

export default Header;

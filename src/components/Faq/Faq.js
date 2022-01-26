import React from "react";
import "../../components/Faq/Faq.css";
import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Faq() {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);
  const contentRef4 = useRef(null);
  const contentRef5 = useRef(null);
  const contentRef6 = useRef(null);

  useEffect(() => {
    contentRef1.current.style.maxHeight = active1
      ? `${contentRef1.current.scrollHeight}px`
      : "0px";
  }, [contentRef1, active1]);

  const toggleAccordion1 = () => {
    setActive1(!active1);
  };

  useEffect(() => {
    contentRef2.current.style.maxHeight = active2
      ? `${contentRef2.current.scrollHeight}px`
      : "0px";
  }, [contentRef2, active2]);

  const toggleAccordion2 = () => {
    setActive2(!active2);
  };

  useEffect(() => {
    contentRef3.current.style.maxHeight = active3
      ? `${contentRef3.current.scrollHeight}px`
      : "0px";
  }, [contentRef3, active3]);

  const toggleAccordion3 = () => {
    setActive3(!active3);
  };

  useEffect(() => {
    contentRef4.current.style.maxHeight = active4
      ? `${contentRef4.current.scrollHeight}px`
      : "0px";
  }, [contentRef4, active4]);

  const toggleAccordion4 = () => {
    setActive4(!active4);
  };

  useEffect(() => {
    contentRef5.current.style.maxHeight = active5
      ? `${contentRef5.current.scrollHeight}px`
      : "0px";
  }, [contentRef5, active5]);

  const toggleAccordion5 = () => {
    setActive5(!active5);
  };
  useEffect(() => {
    contentRef6.current.style.maxHeight = active6
      ? `${contentRef6.current.scrollHeight}px`
      : "0px";
  }, [contentRef6, active6]);

  const toggleAccordion6 = () => {
    setActive6(!active6);
  };

  return (
    <div className="body-faq">
      <div className="faq-toptext">
        <h1 style={{ color: "#cebd86", marginBottom: "75px" }}>
          Frequently Asked Questions
        </h1>
      </div>

      <div className="App">
        <div>
          <button
            className={`question-section ${active1}`}
            onClick={toggleAccordion1}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  What is the adidas Originals: Into the Metaverse NFT?
                </h4>
                <FiChevronDown
                  className={active1 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef1}
                className={active1 ? `answer answer-divider` : `answer`}
              >
                <p>
                  NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help
                  guide adidas Originals into the Metaverse. The limited edition
                  digital collectible celebrates our partnership and offers
                  holders exclusive collaborative physical merchandise and
                  ongoing digital utility.
                </p>
              </div>
            </div>
          </button>
        </div>

        <div>
          <button
            className={`question-section ${active2}`}
            onClick={toggleAccordion2}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  What does "Phase 1" mean?
                </h4>
                <FiChevronDown
                  className={active2 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef2}
                className={active2 ? `answer answer-divider` : `answer`}
              >
                <p>What does "Phase 1" mean?</p>
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className={`question-section ${active3}`}
            onClick={toggleAccordion3}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  What is the Phase 4 ERC-721 token?
                </h4>
                <FiChevronDown
                  className={active3 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef3}
                className={active3 ? `answer answer-divider` : `answer`}
              >
                <p>What is the Phase 4 ERC-721 token?</p>
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className={`question-section ${active4}`}
            onClick={toggleAccordion4}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  Will there be a reveal?
                </h4>
                <FiChevronDown
                  className={active4 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef4}
                className={active4 ? `answer answer-divider` : `answer`}
              >
                <p>Will there be a reveal?</p>
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className={`question-section ${active5}`}
            onClick={toggleAccordion5}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  What happens to the gas fee?
                </h4>
                <FiChevronDown
                  className={active5 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef5}
                className={active5 ? `answer answer-divider` : `answer`}
              >
                <p>What happens to the gas fee?</p>
              </div>
            </div>
          </button>
        </div>
        <div>
          <button
            className={`question-section ${active6}`}
            onClick={toggleAccordion6}
          >
            <div>
              <div className="question-align">
                <h4 className="question-style" style={{ color: "#cebd86" }}>
                  Why was there a pause during Early Access?
                </h4>
                <FiChevronDown
                  className={active6 ? `question-icon rotate` : `question-icon`}
                />
              </div>
              <div
                ref={contentRef6}
                className={active6 ? `answer answer-divider` : `answer`}
              >
                <p> Why was there a pause during Early Access?</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

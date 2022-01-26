import { Fragment } from "react";
import Header from "./components/Header/Header";
import BodySection1 from "./components/BodySection1/BodySection1";
import BodySection2 from "./components/BodySection2/BodySection2";
import BodySection3 from "./components/BodySection3/BodySection3";
import BodySection4 from "./components/BodySection4/BodySection4";
import BodySection5 from "./components/BodySection5/BodySection5";
import Faq from "./components/Faq/Faq";
import BodySection6 from "./components/BodySection6/BodySection6";
import BodySection7 from "./components/BodySection7/BodySection7";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <BodySection1 />
      <BodySection2 />
      <BodySection3 />
      <BodySection4 />
      <BodySection5 />
      <Faq />
      <BodySection6 />
      <BodySection7 />
      <Footer />
    </React.Fragment>
  );
}

export default App;

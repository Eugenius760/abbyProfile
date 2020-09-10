import React from "react";
import Wave from "../../components/Wave/index";
import Mission from "../../components/Mission/index";
import Twitter from "../../components/Twitter/index";
import Navbar from "../../components/Footer/index"
import "./style.css"

function Landing() {
  return (
    <div>
      <Wave />
      <Mission />
      <Twitter />
      <Navbar sticky="bottom" />
    </div>
  );
}

export default Landing;

import React from "react";
import "./style.css";
import Pic from "../assets/aes.jpeg";

function Mission() {
  return (
    <div className="container meat">
      <div className="row thisMe">
        <div className="col-md-4 pic">
          <img className="abPic" src={Pic} alt="Abby Williams" />
        </div>
        <div className="col-md-6">
          <p>
            On a mission to break the mold in Early Childhood through project
            based learning and technology integration. I am passionate about
            unlocking the potential of my students. K2 Can Too!
            <br />
            Since the start of my professional journey I have always been
            passionate about Early Childhood Education. This stage is where it
            all starts for students! Students at this age are ready for
            challenges and tremendous gains in their learning. Here creativity,
            enthusiasm, and joy abound!
            <br />
            Take a look around this site to see projects, lessons, and
            activities I have designed with my students in mind. Thank you for
            stopping by.
            <br /> Contact me at{" "}
            <a id="email" href="mailto:abbywilliams503@gmail.com">
              AbbyWilliams503@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;

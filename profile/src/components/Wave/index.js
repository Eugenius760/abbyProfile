import React from "react";
import "./style.css";

function Wave() {
  return (
    <div className="wave-container">
      <div className="container">
        <div className="row namePlate">
          <div>Abby Williams</div>
        </div>
        <div className="row tagLine">
          <p>
            Elementary Educator. Master in Early Childhood. Microsoft Innovative
            Educator Expert.
          </p>
        </div>
        <div className="container">
          <div className="row links">
            <a className="link" href="/projects">
              Projects
            </a>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L26.7,85.3C53.3,107,107,149,160,160C213.3,171,267,149,320,149.3C373.3,149,427,171,480,197.3C533.3,224,587,256,640,261.3C693.3,267,747,245,800,218.7C853.3,192,907,160,960,122.7C1013.3,85,1067,43,1120,64C1173.3,85,1227,171,1280,192C1333.3,213,1387,171,1413,149.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Wave;

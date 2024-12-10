import React from "react";
import "./aboutUs.css";
import sree from "./../../assets/sree.jpeg";



function aboutUs({theme}) {
  return (
    <div className={`container ${theme}`}>
      <header>
        <h1>Made by</h1>
      </header>
      <main>
        
        <div className="team-member">
          {/* <img src={sree} alt="Team Member 3" /> */}
          <h2>Moniga SenthilKumar</h2>
          <p>312322201104</p>
          {/* <p></p> */}
        </div>
      </main>
      <p className="para">This project was made using the help of React and openweathermap.org API<br></br></p>
    </div>
  );
}

export default aboutUs;

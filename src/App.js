import React from "react";
import { ReactTyped } from "react-typed";
import logo_nlv from "./logo_nlv.png";
import "./App.css";

function App() {
  const text = `<span style={{fontSize: '24' , fontWeight: 'bold'}}>Since 2003, New Learning Ventures LLC has been at the leading edge of the learn-to-earn Talent spectrum.  Our practice focuses on the Talent-based economy designing innovative and pioneering approaches to human capital development including strategy, change management, baseline, benchmarking, comparative rankings, AI data analytics, gaming, stakeholder and community engagement, policy formulation, impact assessment, evaluation, communications, risk analysis, partnerships, globalization, AI-learner experience design, personalization, content curation, coaching, digital realities, inclusion, equity, upskilling, knowledge transfer, virtual intern and apprenticeships, micro-credentials, immersive training, and more.  We are uniquely positioned as one of few experts in all aspects of Talent discovery, acquisition, and enhancement working with governments, ngos, higher education, education, multi-national corporations and startups globally. 

  Later this year, New Learning Ventures LLC will announce the roll-out of Smart Talent Cities with a Lighthouse Talent Cities Project in Braga, Portugal.  Please stay engaged as we re-design our digital space and invite you to engage.  <br/>
  
  For information, please contact Gerri Burton at gsburton@newlearningventures.com</span>
  `;

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo_nlv}
          style={{
            width: "500px",
            pointerEvents: "none",
            margin: "40px",
          }}
          alt="logo"
        />
        <ReactTyped
          strings={[text]}
          typeSpeed={30} // Adjust typing speed (characters per second)
          // backSpeed={10} // Adjust deletion speed (characters per second)
          loop={false} // Set to true for continuous typing
          // className="typed-text" // Apply custom CSS class for styling
        />
      </header>
    </div>
  );
}

export default App;

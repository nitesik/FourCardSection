import "./styles.css";
import teambuilder from "./images/icon-team-builder.svg";
import calculator from "./images/icon-calculator.svg";
import supervisor from "./images/icon-supervisor.svg";
import karma from "./images/icon-karma.svg";

function Home() {

  return (
    <div className="container">
      <div className="title">Reliable, efficient delivery</div>
      <div className="subtitle">Powered by Technology</div>
      <div className="description">
        <div className="text">Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</div>
      </div>
      <div className="cards">
        <div className="supervisor">
          <div className="card-title">Supervisor</div>
          <div className="card-description">Monitors activity to identify project roadblocks</div>
          <img src={supervisor} alt="karma logo"/>
        </div>
        <div className="team-builder">
          <div className="card-title">Team Builder</div>
          <div className="card-description">Scans our talent network to create the optimal team for your project</div>
          <img src={teambuilder} alt="team builder logo"/>
        </div>
        <div className="karma">
          <div className="card-title">Karma</div>
          <div className="card-description">Regularly evaluates our talent to ensure quality</div>
          <img src={karma} alt="karma logo"/>
        </div>
        
        <div className="calculator">
          <div className="card-title">Calculator</div>
          <div className="card-description">Uses data from past projects to provide better delivery estimates</div>
          <img src={calculator} alt="karma logo"/>
        </div>
        <div className="test"></div>
      </div>
      {/* TODO Mobile */}
    </div>
  )
}

export default Home;
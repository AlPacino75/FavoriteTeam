import React from 'react';
import './About.css';

const About =  props => {

  const {strTeam, strTeamBadge, strDescriptionEN, intFormedYear} = props.team;

  return (

      <section className="section-about">
        
        <div className="main-about">
          <div className="about-title">
          <div className="fan-about">About:</div>
            <div className="fan-about-info">{strTeam}</div>
            <div className="fan-about-capacity">Formation: {intFormedYear}</div>
            <img src={strTeamBadge} alt="about" className="about-image"/>
          </div>
         
          <div className="about-description">
          {strDescriptionEN}
          </div>
              
          </div>
        
      </section>
   

  );
}

export default About;


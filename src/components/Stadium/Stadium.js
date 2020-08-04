import React from 'react';
import './Stadium.css';


const Stadium = props => {

  const {strStadium, strStadiumThumb, strStadiumDescription, intStadiumCapacity} = props.team;

  return (

      <section id="Stadium" className="section-stadium">
        
        <div className="main-stadium">
          <div className="stadium-title">
            <div className="fan-stadium">Stadium Info:</div>
            <div className="fan-stadium-info">Name: {strStadium}</div>
            <div className="fan-stadium-capacity">Capacity: {intStadiumCapacity}</div>
          </div>
         
    
          <img src={strStadiumThumb} alt="stadium" className="stadium-image"/>
          <div className="stadium-description">
          {strStadiumDescription}
          </div>
              
          </div>
        
      </section>
    

  );
}

export default Stadium;
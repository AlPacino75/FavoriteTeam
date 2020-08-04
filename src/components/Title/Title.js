import React from 'react';
import './Title.css';


const Title = props =>  {
  const {strTeam, strTeamLogo} = props.team;
  return (
    <header className="main-header">
       
        <img className="title-image" src={strTeamLogo} alt={strTeam}/>
        <div className="team-title">{strTeam}</div>
        
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <a href="#Stadium">Stadium Information</a>
            </li>
            <li>
              <a href="#Gallery">Fan Images</a>
            </li>
            <li>
              <a href="#Social">Social Media</a>
            </li>
          </ul>
        </nav>
      
    </header>

  );
}

export default Title;
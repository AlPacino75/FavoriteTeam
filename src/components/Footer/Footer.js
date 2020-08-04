import React from 'react';
import './Footer.css';
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';


const  Footer = props => {
  return (

    <section id="Social"  className="section-footer">
        <div className="social-info">FIND US ON SOCIAL MEDIA:</div>
        <div className="social-icons">
        
          {props.YouTube ?   <div><a href={'https://' + props.YouTube}><FaYoutube /></a></div> : ""}
          {props.Twitter ?   <div><a href={'https://' + props.Twitter}><FaTwitter /></a></div> : ""}
          {props.Facebook ?  <div><a href={'https://' + props.Facebook}><FaFacebook /></a></div> : ""}
          {props.Instagram ? <div><a href={'https://' + props.Instagram}><FaInstagram /></a></div> : ""}

        </div>
        
    </section>

  );
}

export default Footer;
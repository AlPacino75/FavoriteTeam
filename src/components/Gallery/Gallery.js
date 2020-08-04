import React from 'react';
import './Gallery.css';


const Gallery= props => {
  return (

      <section id="Gallery" className="section-gallery">
          <div className="gallery-title">
            <div className="fan-gallery">Fan Gallery:</div>
            <div className="fan-gallery-info">Check out photos from our fans:</div>
          </div>
         
            <div className="main-gallery">

            {props.GalleryImages.map((value, index) => {
              return (
                <div key={index} className="">
                  <img src={value} alt="fan-image1" className="gallery-image"/>
                  <div className="item-wrapper">
                      <div className="item-title">
                          <h2 className="title-bold color-dark text-uppercase title-cursive size-md">Fan Image {index + 1}</h2>
                      </div>
                      
                  </div>
              </div>
              )
              
            })}
                      
            </div>
        
      </section>
    

  );
}

export default Gallery;
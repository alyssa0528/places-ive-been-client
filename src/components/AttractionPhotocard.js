//for image-only to be displayed on Home page
import React from 'react';
import './AttractionPhotocard.css'

const AttractionPhotocard = ({ attraction }) => (
    <div key={attraction.id} className="AttractionPhotoDiv">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={attraction.img_url} alt={attraction.img_url} className="AttractionPhotocard"/>
        </div>
        <div className="flip-card-back">
          <h3>{attraction.name}</h3>
        </div>
      </div>
    </div>
)

export default AttractionPhotocard;

//for image-only to be displayed on Home page

import React from 'react';
import './AttractionCard.css'

const AttractionPhotocard = ({ attraction }) => (
    <div key={attraction.id} className="AttractionPhotoDiv">
      <img src={attraction.img_url} alt={attraction.img_url} className="AttractionPhotocard"/>
    </div>
)

export default AttractionPhotocard;

import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="bg-container">
            <div className="row">
            <div className="col-md-6">
            <div className="banner-text">
            <h1>
                We Can Make Your 
                Celebration Unforgetable
            </h1>
            <p>
                While they might seem like toys, a high-quality drone is a serious investment. We’ve flown plenty and there are a lot of good performers that we use.
            </p>
            </div>
            <button className="btn-banner btn-animate"> Buy Now
            </button>
            </div>
            <div className="col-md-6">
                <div className="video-ply">
                <iframe width="640" height="270" src="https://player.vimeo.com/video/212088035?h=9a06600e52"
                />
                </div>
            </div>  
        </div>
        </div>
    );
};

export default Banner;
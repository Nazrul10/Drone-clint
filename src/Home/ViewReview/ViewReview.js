import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ViewReview.css'

const ViewReview = () => {
    const [allData, setAlldata] = useState([])
    useEffect(()=>{
        fetch('https://intense-hollows-21648.herokuapp.com/viewreview')
        .then(res => res.json())
        .then(data => setAlldata(data))
    } ,[])
    return (
       <div className="container bg-cover">
           <Carousel className="wd-slider" variant="dark">
              
              {
              allData?.map(dt =>
                <Carousel.Item>
                  <div className="text-carasol">
                  <h1>{dt.name}<span><h2>{dt.text}</h2></span><span><Rating className="review" name="read-only" defaultValue={dt.rating} readOnly /></span></h1>
                  </div>
                  </Carousel.Item>
              ) 
           }
             
            </Carousel>
       </div>
    );
};

export default ViewReview;
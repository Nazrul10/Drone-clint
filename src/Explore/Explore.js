import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Explore = () => {
    const [allData, setAlldata] = useState([])
    useEffect(()=>{
        fetch('https://intense-hollows-21648.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAlldata(data))
    } ,[])
    return (
        <div>
          <Header></Header>
        <h1 className="text-dark text-center m-3">Explore All Products</h1>
        {allData.length === 0?<Spinner className="spners" animation="border" variant="light" />:<div className="grid-data">
        {
            allData?.map((data) => 

            <div>
                
               <div class="container-s">
<div class="card">
 <div class="card__image-container">
   <img width="100%" height="100%" class="card__image" src={data.picture} alt=""/>
</div>
  
  <svg class="card__svg" viewBox="0 0 800 500">

    <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
    <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
  </svg>

 <div class="card__content">
   <h5 class="card__title">{data.name}</h5>
   <h6 class="card__title">Price : ${data.price}</h6>
 <p>{data?.discriptiion}</p>
 <Link to={`/orderplace/${data._id}`}>
 <Button className="mt-5 buy-btn">Buy Now</Button>
 </Link>
</div>
</div>
</div>
            </div>
            
            
            )}
    </div>}
    <Footer></Footer>
    </div>
    );
};

export default Explore;
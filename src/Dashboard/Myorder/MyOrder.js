import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../Hook/useAuth';

const MyOrder = () => {
    const [isShipped, setIsShipped]= useState()
    const [allData, setAlldata] = useState([])
    const {user} = useAuth()
    console.log(user.email);

    useEffect(()=>{
        fetch(`https://intense-hollows-21648.herokuapp.com/myallorder/${user?.email}`)
        .then(res => res.json())
        .then(data => setAlldata(data))
    } ,[isShipped])
    //delete order
    const handleManageDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete')
        if(proceed){
            fetch(`https://intense-hollows-21648.herokuapp.com/deleteorder/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((result) => {
            if(result.deletedCount){
                alert('Deleted successfully')
                const remaining = allData.filter(order => order._id !== id);
                setIsShipped(remaining)
            }
            });
        }
    }
    return (
        <div>
        <h1 className="text-dark text-center m-3">My All Orders</h1>
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
 <h6>Order Status : {data?.status}</h6>
 <Button onClick={()=>handleManageDelete(`${data?._id}`)} className="mt-5 buy-btn">Delete</Button>
</div>
</div>
</div>
            </div>
            
            
            )}
    </div>}
    </div>
    );
};

export default MyOrder;
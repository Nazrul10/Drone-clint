
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hook/useAuth';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';


const OrderPlace = () => {
    const {user} = useAuth();
    const [details, setDetails] = useState();
    console.log(user, 'fdsjfosdjfoj');
    const {orderId} = useParams()
    useEffect(()=>{
        fetch(`https://intense-hollows-21648.herokuapp.com/placeorder/${orderId}`)
       .then((res) => res.json())
       .then(result => {
        setDetails(result);
       });
    }, [])

    const { register, handleSubmit, reset} = useForm({});
    const onSubmit = (data) =>{
        data.status = "panding"
        console.log(data);
        fetch("https://intense-hollows-21648.herokuapp.com/myorders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
            })
           .then((res) => res.json())
           .then(result => {
               if(result.acknowledged){
                   alert("Order is Inserted");
               }
           });
           reset()
    }
    return (
            <div className="row">
                <Header></Header>
                <div className="col-md-4">
                <div class="container-s">
                    <div class="card">
                        <div class="card__image-container">
                        <img width="100%" height="100%" class="card__image" src={details?.picture} alt=""/>
                        </div>
      
                        <svg class="card__svg" viewBox="0 0 800 500">

                            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
                            <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
                        </svg>
    
                        <div class="card__content">
                        <h1 class="card__title">{details?.name}</h1>
                        <h4 class="card__title">Price : {details?.price}</h4>
                        <p>{details?.discriptiion}</p>
                        </div>
                    </div>
                </div>
                    
                </div>


                <div className="col-md-8">
                <div className="form-submit">
    <form onSubmit={handleSubmit(onSubmit)}>
            <div>
           <h1 className="text-light text-center">User Details</h1>
           <hr className="text-light" />
       </div>
       <input placeholder="Address" {...register("address",{ required: true })}  />
       <input placeholder="Phone" {...register("phone", { required: true })}/>
       <input {...register("yourName")} defaultValue={user?.displayName} />
       <input {...register("email")} defaultValue={user?.email} />
       <div>
           <h1 className="text-light text-center">Order Details</h1>
           <hr className="text-light" />
       </div>
       {details?.name && <input defaultValue={details?.name} {...register('name')}/>}
      {details?.price && <input defaultValue={details?.price} {...register('price')}/>}
      {details?.discriptiion && <input {...register("discriptiion")} defaultValue={details?.discriptiion}/>}
      {details?.picture && <input {...register("picture")} defaultValue={details?.picture}/>}
      {details?.icon && <input {...register("icon")} defaultValue={details?.icon}/>}
      <input className="input-btn" type="submit" value="place Order" />
    </form>
        </div>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default OrderPlace;
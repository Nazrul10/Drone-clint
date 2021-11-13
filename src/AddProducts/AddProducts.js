import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProducts.css'
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    // Submit your data into store
    const onSubmit = data =>{
        fetch("https://intense-hollows-21648.herokuapp.com/addproduct", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(data),
         })
        .then((res) => res.json())
        .then(result => {
            if(result.acknowledged){
                alert('Product Inserted successfully');
                reset();
            }
        });
    };
    return (
        <div className="form-submit">
            <form onSubmit={handleSubmit(onSubmit)}>
       <input placeholder="Product name" {...register("name", { required: true })} />
      <input placeholder="Price" type="number" {...register("price", { required: true })} />
      <input placeholder="Discriptiion" {...register("discriptiion", { required: true })}/>
      <input placeholder="Picture link" {...register("picture", { required: true })}/>
      <input className="input-btn" type="submit" />
    </form>
        </div>
    );
};

export default AddProducts;
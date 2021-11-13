import { TextareaAutosize } from '@mui/core';
import { TextField } from '@mui/material';
import React from 'react';
import useAuth from '../../Hook/useAuth';
import './Review.css'

const currencies = [
    {
      value: 0,
      label: '0',
    },
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },
  ];
const Review = () => {
    const [review, setReview] = React.useState('');
    const {user} = useAuth();
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = {...review}
        newData[field] = value
        setReview(newData)
    };

    const handleSubmit = (e) =>{
        const name = user?.displayName;
        review.name = name;
        fetch("https://intense-hollows-21648.herokuapp.com/review", {
         method: "POST",
         headers: { "content-type": "application/json" },
         body: JSON.stringify(review),
         })
        .then((res) => res.json())
        .then(result => {
            if(result.acknowledged){
                alert('Review successfully Submited');
            }
        });
        e.preventDefault()
    }
    return (
        <div class="paper">
  <h1>Wtite a review</h1>
  <form onSubmit={handleSubmit}>
  <TextareaAutosize
       minRows={5}
       required
      aria-label="maximum height"
      name="text"
      onBlur={handleChange}
      placeholder="Please write a review"
      style={{ width: '80%', margin: 'auto', display: 'block' }}
    />
      <TextField
      style={{ width: '80%', marginLeft: '4rem',  }}
          id="standard-select-currency-native"
          select
          required
          name="rating"
          label="Review select"
          onBlur={handleChange}
          SelectProps={{
            native: true,
          }}
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <button type="submit" style={{ width: '80%', marginLeft: '4rem',marginTop:'1rem'  }} className="cta">
            <span>Submit review</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
    </button>
  </form>
  </div>
    );
};

export default Review;
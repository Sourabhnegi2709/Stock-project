import { useState } from 'react';
import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; 

const OpenAccount = () => {
  const navigate = useNavigate(); 
  const [hover, setHover] = useState(false);


  return (
    <div className="container p-4 mb-7">
      <div className="row flex flex-col items-center">
        <img className='mb-5' src="/assets/homeHero.png" alt="" />
        <h1 className='text-3xl  font-semibold'>Open a zerodha account</h1>
        <p className='mt-4 mb-4 text-[1.1rem]'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Button
          style={{
            height: "3.5rem",
            width: "auto",
            backgroundColor: hover ? "black" : "",
            color: hover ? "white" : "",
            transition: "all 0.3s ease-in-out",
          }}
          variant="contained"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </Button>
      </div>
    </div>
  )
}

export default OpenAccount
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);
    return (
        <div className="container p-4">
            <div className="row flex flex-col items-center">
                <img className='mb-5' src="/assets/homeHero.png" alt="Hero Image" />
                <h1 className='text-3xl  font-semibold'>Invest in Everything</h1>
                <p className='mt-4 mb-4 text-[1.1rem]'>Online platform to invest in stock, derivatives,mutual funds, and more</p>
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
                    onClick={() => navigate("/login")}
                >
                    Sign up for free
                </Button>
            </div>
        </div>
    )
}

export default Hero
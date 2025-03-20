import { React, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Universe = () => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);


    return (
        <div className='w-full flex flex-col items-center jus  mb-[5rem]'>
            <div className='flex flex-col items-center mb-[3rem]'>
                <h1 className='text-4xl font-semibold text-[#424242]'>The Zerodha Universe</h1>
                <p className='text-[1.2rem] font-medium text-[#424242] mt-7'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className=' w-full flex justify-evenly'>
                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/smallcaseLogo.png" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/sensibullLogo.svg" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/streakLogo.png" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>
            </div>

            <div className=' w-full flex justify-evenly mt-11 mb-8'>
                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/goldenpiLogo.png" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/dittoLogo.png" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>

                <div className='flex flex-col items-center'>
                    <img className='h-[2.4rem]' src="/assets/zerodhaFundhouse.png" alt="" />
                    <p className='text-[1.1rem]  text-[#424242] mt-7'>Our Latest Management venture</p>
                </div>
            </div>
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
    )
}

export default Universe;
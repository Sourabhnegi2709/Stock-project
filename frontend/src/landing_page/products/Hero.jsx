import React from 'react'

const Hero = () => {
    return (
        <div className='w-full flex flex-col mt-9 items-center'>
            <h1 className='text-5xl font-semibold text-[#424242]'>Zerodha Products</h1>
            <h3 className='text-[1.5rem] mt-5 text-[#424242]'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='text-[1.2rem] mt-5'>Check out our <a className='text-blue-600' href="#">investment</a> <a className='text-blue-600' href="#">offerings</a> <i className="fa-solid fa-arrow-right text-blue-600"></i></p>
        </div>
    )
}

export default Hero;
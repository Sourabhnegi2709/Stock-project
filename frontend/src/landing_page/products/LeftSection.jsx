import React from 'react'

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
    return (
        <div className='container w-full flex mt-8 p-5'>
            <div className='w-[65%]'>
                <img className='flex items-center justify-items-end ml-[6rem]' src={imageURL} alt="" />
            </div>
            <div className='flex w-[35%] flex-col justify-center'>
                <h1 className='text-3xl mb-7 font-semibold '>{productName}</h1>
                <p style={{ lineHeight: "1.8" }} className='text-[1.2rem]'>{productDescription}</p>

                <div className=' flex gap-6 mt-8 text-[1.2rem]'>
                    <a href={tryDemo}>try Demo</a>
                    <a href={learnMore}>Learn more</a>
                </div>

                <div className=' flex gap-4 mt-7'>
                    <a href={googlePlay}><img src={googlePlay} alt="" /></a>
                    <a href={appStore}><img src={appStore} alt="" /></a>
                </div>
            </div>

        </div>
    )
}

export default LeftSection;
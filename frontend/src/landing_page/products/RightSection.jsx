import React from 'react'

const RightSection = ({ imageURL, productName, productDescription, tryDemo, learnMore }) => {
    return (
        <div className='container w-full flex mt-8 p-5'>
            <div className='flex w-[40%] flex-col ml-[11rem] justify-center '>
                <h1 className='text-3xl mb-7 font-semibold '>{productName}</h1>
                <p style={{ lineHeight: "1.8" }} className='text-[1.2rem]'>{productDescription}</p>

                <div className=' flex gap-6 mt-8 text-[1.2rem]'>
                    <a href={tryDemo}>try Demo</a>
                    <a href={learnMore}>Learn more</a>
                </div>


            </div>

            <div className='w-[60%]'>
                <img className='flex items-center justify-items-end float-end' src={imageURL} alt="" />
            </div>

        </div>
    )
}


export default RightSection;
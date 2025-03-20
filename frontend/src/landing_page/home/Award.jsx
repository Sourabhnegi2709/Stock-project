import React from 'react'

const Award = () => {
    return (
        <div className='container'>
            <div className="row flex items-center">
                <div className=' w-1/2 p-7 items-center'>
                    <img src="/assets/largestBroker.svg" alt="" />
                </div>
                <div className='w-1/2 p-7'>
                    <h1 className='text-3xl mb-5  font-semibold'>Largest stock broker in india</h1>
                    <p className='mt-4'>2+ million zerodha client contribute to over 15% of all retails order volume in india daily by trading and investing in:</p>
                    <div className='flex justify-between mt-4'>
                        <div className='text-[1.1rem] '>
                            {["features and options", "commodity derivatives", "Currency derivatives"].map((item, index) => {
                                return (
                                    <li className='p-1' key={index}>{item}</li>
                                )
                            })}
                        </div>
                        <div className='text-[1.1rem]'>
                            {["stocks & IPOs", "direct Mutuals funds", "Bonds & government security"].map((item, index) => {
                                return (
                                    <li className='p-1' key={index}>{item}</li>
                                )
                            })}
                        </div>
                    </div>
                    <img className='mt-7 w-[85%]' src="/assets/pressLogos.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Award
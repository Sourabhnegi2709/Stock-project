import React from 'react'

const Hero = () => {
    return (
        <div className='w-full bg-[#387ED1] h-[80vh] flex flex-col p-4 text-white'>
            <div className=' w-full flex items-center  justify-between p-7'>
                <h1 className='text-[1.2rem] font-semibold ml-[4rem]'>Support Portals</h1>
                <p className='underline text-[1rem] font-semibold '>Track Tickets</p>
            </div>

            <div className='flex gap-[7rem] mt-[4rem]'>
                <div className='flex flex-col ml-[5rem] '>
                    <p className='text-[1.2rem] font-semibold'>Search for an answer or browse help topics to create a ticket</p>
                    <div className='flex items-center ' href=""><input className='mt-4 h-[60px] w-full border-zinc-100 text-black' type="text" autoComplete='off' placeholder='Eg: How do I activate F&O, why my order getting rejected...  ' /><i class="fa-solid fa-magnifying-glass mr-4 bg-zinc-100 text-black h-[60px] flex  mt-4 items-center justify-center"></i></div>
                    <div className='flex gap-5 mt-[2rem]'>
                        <a className='underline text-[1.1rem]'>Track account opening</a>
                        <a className='underline text-[1.1rem]'>Track account opening</a>
                        <a className='underline text-[1.1rem]'>Track account opening</a>
                    </div>
                    <a className='underline text-[1.1rem] mt-3' href="#">Key User manual</a>

                </div>

                <div className='flex flex-col'>
                    <h1 className='text-[1.3rem] font-semibold'>Featured</h1>

                    <ol className='mt-3'>
                        <li className='underline font-semibold'>1. Surveillance measure on scrips - February 2025,</li>
                        <li className='mt-5 underline font-semibold'>2. Current Takeovers and Delisting - February 2025</li>
                    </ol>

                </div>
            </div>
        </div>
    )
}

export default Hero
import React from 'react'

const Stats = () => {
    return (
        <div className='container w-full h-screen p-[2rem]'>
            <div className="row w-full flex justify-evenly p-6">
                <div className=' flex flex-col w-[40%] p-5 '>
                    <h1 className='text-4xl font-semibold mb-5 ml-4'>Trust with confidence</h1>

                    <div className='p-[1rem]'>
                        <h2 className='text-[1.3rem]'>Customer first choice</h2>
                        <p className='text-[#666666]'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className='p-[1rem]'>
                        <h2 className='text-[1.3rem]'>No spam or gimmicks</h2>
                        <p className='text-[#666666]'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
                    </div>

                    <div className='p-[1rem]'>
                        <h2 className='text-[1.3rem]'>The Zerodha universe</h2>
                        <p className='text-[#666666]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    </div>

                    <div className='p-[1rem]'>
                        <h2 className='text-[1.3rem] '>Do better with money</h2>
                        <p className='text-[#666666]'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                    </div>

                </div>

                <div className='w-[60%] flex flex-col items-center'>
                    <img className='h-[80%]' src="/assets/ecosystem.png" alt="" />

                    <div className='flex gap-3'>
                        <a className='font-medium text-blue-600 hover:text-zinc-900' href="#">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='font-medium text-blue-600 hover:text-zinc-900' href="#">Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
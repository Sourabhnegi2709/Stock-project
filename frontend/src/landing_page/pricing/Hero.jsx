import React from 'react'

const Hero = () => {
    return (
        <div className='pt-[80px] flex flex-col mb-10 gap-4'>
            <div className='pt-[80px] flex flex-col gap-4'>
                <div className='flex flex-col items-center justify-center  mb-8'>
                    <h1 className='text-[2.6rem] font-semibold text-[#424242] tracking-tighter'>Pricing</h1>
                    <p className='text-[1.3rem] mt-4 text-[#424242] '>List of all charges and taxes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-7 mt-6 border-t-2">

                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full max-w-[350px] mx-auto">
                        <img className="w-32 mb-4" src="/assets/pricingEquity.svg" alt="Free equity delivery" />
                        <h1 className="text-2xl font-semibold text-[#424242] tracking-tighter text-center">Free Equity Delivery</h1>
                        <p className="text-lg text-[#424242] mt-3 text-center">
                            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                        </p>
                    </div>


                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full max-w-[350px] mx-auto">
                        <img className="w-32 mb-4" src="/assets/intradayTrades.svg" alt="Intraday and F&O trades" />
                        <h1 className="text-2xl font-semibold text-[#424242] tracking-tighter text-center">Intraday & F&O Trades</h1>
                        <p className="text-lg text-[#424242] mt-3 text-center">
                            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>


                    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full max-w-[350px] mx-auto">
                        <img className="w-32 mb-4" src="/assets/pricingEquity.svg" alt="Free direct MF" />
                        <h1 className="text-2xl font-semibold text-[#424242] tracking-tighter text-center">Free Direct MF</h1>
                        <p className="text-lg text-[#424242] mt-3 text-center">
                            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
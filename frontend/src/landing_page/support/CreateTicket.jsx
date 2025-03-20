import React from 'react'


const CreateTicket = () => {
    return (
        <div className='flex flex-col ml-7 p-4'>
            <h1 className='text-[#666666] text-[1.8rem] ml-[4rem] mb-9'>To create a ticket, select a relevant topic</h1>
            <div className='flex items-center justify-centre ml-[4rem] gap-[9rem]'>
                <div className='flex flex-col '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-solid fa-circle-plus mr-2"></i>Account Opening</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#"> Resident individuals</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">minor</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Non Resident Indian (NRI)</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Company Partnership</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Glossary</a>
                </div>

                <div className='flex flex-col '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-regular fa-user mr-2"></i>Your Zirodha Account</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#"> Your Profile</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Account modification</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">client master report</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Nomination</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Transfer and conversion</a>
                </div>

                <div className='flex flex-col '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-solid fa-chart-simple mr-2"></i>Kite</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#"> IPO</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Trading FAQs</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Margin trading</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Charts and orders</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Alerts</a>
                </div>
            </div>

            <div className='flex items-center justify-centre ml-[4rem] mt-[4rem] gap-[11rem]'>
                <div className='flex flex-col '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-regular fa-calendar mr-2"></i>Fund</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#">Fund withdrawal</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Adding funds</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Adding Bank Account</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">eMandates</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Resident individuals</a>
                </div>

                <div className='flex flex-col '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-brands fa-stumbleupon-circle mr-2"></i>Console</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#">Portfolio</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Corporate Action</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Funda Statement</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Report</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">Profile</a>
                </div>

                <div className='flex flex-col  '>
                    <h1 className='text-zinc-900 text-[1.3rem] mb-3 '> <i class="fa-solid fa-coins mr-2"></i>Coin</h1>

                    <a className='ml-6 mt-2 text-blue-600' href="#"> Understanding mutual funds and coin</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">coin app</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">coin web</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">transaction and report</a>
                    <a className='ml-6 mt-2 text-blue-600' href="#">National Pension scheme</a>
                </div>
            </div>


        </div>
    )
}

export default CreateTicket
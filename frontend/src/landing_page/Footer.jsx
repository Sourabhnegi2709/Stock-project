import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col mt-[5rem]'>
            <div className='w-full flex justify-evenly bg-[#FBFBFB]'>

                <div>
                    <img className='w-[9rem]' src="assets/logo.svg" alt="" />
                    <p className='mt-4 text-[#666666]'> &copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p className='text-[#666666]' >All rights reserved.</p>
                    <div className='flex gap-4 mt-4 mb-4'>
                        <i class="fa-brands fa-threads text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                        <i class="fa-brands fa-facebook-f text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                        <i class="fa-brands fa-instagram text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                        <i class="fa-brands fa-linkedin-in text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                    </div>
                    <hr />

                    <div className='flex gap-4 mt-4'>
                        <i class="fa-brands fa-youtube text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                        <i class="fa-brands fa-whatsapp text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                        <i class="fa-brands fa-telegram text-[#666666] hover:text-blue-600 text-[1.3rem]"></i>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-3'>company</h2>

                    {["signup", "About", "Pricing", "Product", "Referral program", "careers", "zerodha tech", "open source", "press & media"].map((item, index) => {
                        return (
                            <a key={index} href="#" className="hover:text-blue-600 font-semibold text-[1.1rem] mt-2 text-[#666666]">{item}</a>
                        )
                    })}
                </div>

                <div className='flex flex-col'>
                    <h2 className='text-2xl mb-3'>Support</h2>

                    {["contact us", "Support portal", "Z-connect blog", "List of charges", "Downloads and resources", "video", "Market overview"].map((item, index) => {
                        return (
                            <a key={index} href="#" className="hover:text-blue-600 font-semibold text-[1.1rem] mt-2 text-[#666666]">{item}</a>
                        )
                    })}
                </div>

                <div className='flex flex-col'>
                    <h2 className='text-2xl'>Account</h2>

                    {["Open an account", "Fund transfer"].map((item, index) => {
                        return (
                            <a key={index} href="#" className="hover:text-blue-600 font-semibold text-[1.1rem] mt-3 text-[#666666]">{item}</a>
                        )
                    })}
                </div>

            </div>

            <div className='p-[4rem] bg-[#FBFBFB]'>
                <p className='text-[#666666]'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd.
                    – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com.</p>
                <p className='text-[#666666]'>Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

                    Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.</p>

                <p className='text-[#666666]'>Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances

                    Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

                <p className='text-[#666666]'> Investments in securities market are subject to market risks; read all the related documents carefully before investing.

                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2)
                </p> Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3)
                <p className='text-[#666666]'> Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.

                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
            </div>
        </div>
    )
}

export default Footer
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";  // Correct import

const Education = () => {
    return (
        <div className='w-full flex items-center justify-evenly p-6 '>
            <div className='w-1/2'>
                <img className='ml-7' src="/assets/education.svg" alt="" />
            </div>

            <div className='w-1/2'>
                <h1 className='text-3xl text-[#424242] font-semibold mb-6'>
                    Free and open market education
                </h1>
                <p className='text-[#666666] mb-5 text-[1.1rem]'>
                    Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                </p>
                <a className='font-medium text-blue-600 hover:text-zinc-900 mb-5' href="#">
                    Varsity <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
                <p className='text-[#666666] mt-5 text-[1.1rem]'>
                    TradingQ&A, the most active trading and investment community in India for all your market-related queries.
                </p>
                <a className='font-medium text-blue-600 hover:text-zinc-900 mt-7' href="#">
                    TradingQ&A <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </a>
            </div>
        </div>
    );
};

export default Education;
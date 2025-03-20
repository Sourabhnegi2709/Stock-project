import React from 'react'

const Team = () => {
    return (
        <div className='w-full flex flex-col items-center mb-7 '>
            <h1 className='text-4xl font-semibold'>Sourabh</h1>

            <div className='w-full flex justify-evenly ml-4 mt-[4rem]'>
                <div className='flex flex-col items-center mb-5'>
                    <img className='h-[18rem] w-[18rem] rounded-full' src="/assets/sourabh.jpg" alt="Sourabh Negi" />
                    <h2 className='text-[1.4rem] mb-4 text-[#424242] '>Sourabh Negi</h2>
                    <p className='text-[#424242]'>Web Developer & Designer</p>
                </div>

                <div className='flex flex-col w-[40%] mr-5'>
                    <p className='text-[1.2rem] text-[#424242] mb-3'>
                        I am a passionate Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, React, and Node.js. Currently pursuing a Bachelor of Computer Applications, I specialize in building interactive and responsive web applications.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mb-3'>
                        With hands-on experience developing a **Spotify Clone**, a **Functional Airbnb Clone**, and my own **Portfolio Website**, I have honed my skills in both frontend and backend technologies.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mb-3'>
                        I am always eager to learn new technologies and contribute to innovative projects. My expertise includes working with Linux, LAMP, IIS, and Apache.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mb-3'>
                        Connect on <a className='text-blue-600' href="mailto:sourabhnegi557@gmail.com">Email</a> / <a className='text-blue-600' href="https://www.linkedin.com/in/saurabh-negi-809123324">LinkedIn</a> / <a className='text-blue-600' href="https://github.com/">GitHub</a>
                    </p>
                </div>
            </div>

            <div className=' w-full flex items-center justify-evenly'>
                <div className='flex flex-col items-center mb-5'>
                    <img className='h-[18rem] w-[18rem] rounded-full' src="/assets/sourabh.jpg" alt="" />
                    <h2 className='text-[1.4rem] mb-4 text-[#424242] '>sourabh</h2>
                    <p className='text-[#424242]'>Founder , CEO</p>
                </div>

                <div className='flex flex-col items-center mb-5'>
                    <img className='h-[18rem] w-[18rem] rounded-full' src="/assets/sourabh.jpg" alt="" />
                    <h2 className='text-[1.4rem] mb-4 text-[#424242] '>sourabh</h2>
                    <p className='text-[#424242]'>Founder , CEO</p>
                </div>

                <div className='flex flex-col items-center mb-5'>
                    <img className='h-[18rem] w-[18rem] rounded-full' src="/assets/sourabh.jpg" alt="" />
                    <h2 className='text-[1.4rem] mb-4 text-[#424242] '>sourabh</h2>
                    <p className='text-[#424242]'>Founder , CEO</p>
                </div>
            </div>
        </div>
    )
}

export default Team
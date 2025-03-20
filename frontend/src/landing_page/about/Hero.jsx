import React from 'react'

const Hero = () => {
    return (

        <div className='w-full flex flex-col '>

            <div className='w-full flex flex-col items-center text-[#424242] justify-center mt-[5rem]'>
                <h1 className='text-[2.5rem] font-semibold'>Hi, I'm Sourabh Negi</h1>
                <h2 className='text-[2rem] font-medium'>Web Developer & Designer</h2>
                <p className=' text-[1.6rem] font-semibold text-center mt-4 w-[70%]'>
                    Enthusiastic Frontend Web Developer with expertise in HTML, CSS, JavaScript, React, and Node.js. Passionate about creating user-friendly interfaces and solving problems with technology.
                </p>
            </div>


            <div className='w-full flex p-[2rem] gap-8 mt-[4rem] border-t-2 border-[#615e5e]'>
                <div style={{ lineHeight: "1.7" }} className='w-full flex flex-col items-center p-[4rem] ml-9'>
                    <p className='text-[1.2rem] text-[#424242] mb-4'>
                        I am a passionate frontend web developer with a strong foundation in HTML, CSS, JavaScript, and modern JavaScript frameworks like React. Currently pursuing a Bachelor of Computer Applications, I specialize in building interactive and responsive web applications.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mb-5'>
                        I have completed the MERN Stack Delta Batch from Apna College, which helped me refine my skills in full-stack development, working with Node.js, Express, and MongoDB.
                    </p>
                    <p className='text-[1.2rem] text-[#424242]'>
                        My projects, including a Spotify Clone, an Airbnb Clone, and my personal portfolio, showcase my ability to develop scalable applications and intuitive user interfaces.
                    </p>
                </div>

                <div style={{ lineHeight: "1.7" }} className='w-full flex flex-col items-center p-[4rem] mr-6'>
                    <p className='text-[1.2rem] text-[#424242] mb-4'>
                        Beyond coding, I am enthusiastic about learning new technologies and constantly improving my problem-solving skills. I also enjoy contributing to open-source projects and tech communities.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mb-4'>
                        With a solid understanding of Linux, LAMP, IIS, and Apache, I am comfortable working in various development environments.
                    </p>
                    <p className='text-[1.2rem] text-[#424242] mt-3'>
                        Looking for opportunities where I can leverage my skills, learn from experienced professionals, and contribute to meaningful projects.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
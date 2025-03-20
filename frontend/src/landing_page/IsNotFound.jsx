import React from 'react'

const IsNotFound = () => {
    return (
        <div className="container p-4">
            <div className="row flex flex-col  items-center mb-8">
                <h1 className='text-4xl font-semibold text-red-500'>404 Page Not Found</h1>
                <p className='text-[1.3rem] font-semibold'>Sorry ! The page you looking for does not exist.</p>
            </div>
        </div>
    )
}

export default IsNotFound
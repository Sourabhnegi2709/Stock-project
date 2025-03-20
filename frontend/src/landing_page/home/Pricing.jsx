import React from 'react'

const Pricing = () => {
    return (
        <div className='w-full flex items-center justify-evenly'>
            <div className='w-[40%]'>
                <h1 className='text-3xl font-semibold mb-5'>Unbeatable pricing</h1>
                <p className='mb-4'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a className='font-medium text-blue-600 hover:text-zinc-900 ' href="#">See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="flex justify-center py-8">
                <table className="border border-gray-300 text-center">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-6 py-4">
                                <h1 className="text-2xl font-bold">₹0</h1>
                                <p>Free account opening</p>
                            </td>
                            <td className="border border-gray-300 px-6 py-4">
                                <h1 className="text-2xl font-bold">₹0</h1>
                                <p>Free equity delivery</p>
                                <p>and direct mutual funds</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pricing
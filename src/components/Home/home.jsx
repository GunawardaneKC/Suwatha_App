import React from 'react'
import background from '../Images/back001.png';

export default function Home() {

    return (
        <>
            <div
                className='fixed inset-0 h-screen'
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    zIndex: -1,
                }}
            >
            </div>
            <div className='relative z-10'>
                <br />
                <h1 className='text-center text-3xl text-white mt-10 font-bold'>Suwatha System</h1>
                <div className='flex justify-center items-center'>
                    <div>
                        <a href='/View01'>
                            <div>
                                <button className="mt-10 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-gray-700 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-blue-500 relative bg-neutral-800 h-20 w-72 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-gray-800 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                                    View 01
                                </button>
                            </div>
                        </a>
                        <a href='/View01'>
                            <div>
                                <button className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-gray-700 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-blue-500 relative bg-neutral-800 h-20 w-72 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-gray-800 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                                    View 02
                                </button>
                            </div>
                        </a>
                        <a href='/register'>
                            <div>
                                <button className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-gray-700 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-blue-500 relative bg-neutral-800 h-20 w-72 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-gray-800 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                                    View 03
                                </button>
                            </div>
                        </a>
                        <a href='/admin'>
                            <div>
                                <button className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-gray-700 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-blue-500 relative bg-neutral-800 h-20 w-72 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-gray-800 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-red-200 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                                    View 04
                                </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
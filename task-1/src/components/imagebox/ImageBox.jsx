import React from 'react'

const ImageBox = ({ imagesrc }) => {
    return (
        <div>
            {/* Background Image */}
            <img
                src={imagesrc}
                alt="Open Bar & Lounge"
                className=' object-cover transform hover:scale-105 transition duration-500 ease-in-out'
            />

            {/* Content Below the Image */}
            <div className=' py-6 text-left'>
                <h1 className='text-white text-3xl font-bold mb-2'>Open Bar & Lounge</h1>
                <h5 className='text-white text-lg'>South Park, Delhi</h5>
            </div>
        </div>
    )
}

export default ImageBox

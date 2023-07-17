import React from 'react';

const SingleRecentNews = ({ news }) => {
    const { date, type, role, comments, title, description, image } = news;
    return (
        <div className=' relative shadow-2xl'>
            <div className='absolute right-6 top-3'>
                <span className=' bg-green-600 w-6 text-lg px-3 py-1 text-white rounded'>{date}</span>
            </div>
            <div className='p-3'>
                <img className='rounded' src={image} alt="" />
                <span className='bg-orange-400 text-white font-semibold px-4 py-2 -mt-10 ms-5'>{type}</span>
            </div>
            <div className='p-8 text-gray-600 space-y-4'>
                <div className='flex gap-4'>
                    <p>{role}</p>
                    <p>{comments} Comments</p>
                </div>
                <p className='text-black font-bold'>{title}</p>
                <p>{description}</p>
                <button>Read More..</button>
            </div>
        </div>
    );
};

export default SingleRecentNews;
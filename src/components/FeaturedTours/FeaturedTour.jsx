"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { BsCameraVideo, BsCamera } from "react-icons/bs";
import { FaCircleDollarToSlot , FaLocationArrow } from "react-icons/fa6";
const FeaturedTour = ({ tour = {} }) => {
    //console.log(tour);
    const { id, place_name, destination_img, price, location } = tour

    return (
        <Link href={'/booking'}>
            
            <div className=' bg-cover bg-center h-[350px] w-[400px] rounded-lg' style={{ backgroundImage: `url('${destination_img}')` }}>

                <div className='backdrop-brightness-50 px-5 py-5 rounded-lg h-[350px] w-[400px]'>
                    <div className='flex justify-between'>
                        <p className='capitalize px-2 bg-[#14b0c3] rounded-lg text-center text-white'>Featured</p>
                        <p className='p-1 bg-slate-400 rounded-lg'>
                            <AiOutlineHeart className='h-6 w-6' />
                        </p>
                    </div>
                    <div className='pt-32 text-white space-y-5'>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <AiFillStar className='h-5 w-5 text-yellow-500 '></AiFillStar>
                                <AiFillStar className='h-5 w-5 text-yellow-500 '></AiFillStar>
                                <AiFillStar className='h-5 w-5 text-yellow-500 '></AiFillStar>
                                <AiFillStar className='h-5 w-5 text-yellow-500 '></AiFillStar>
                                <AiFillStar className='h-5 w-5 text-yellow-500 '></AiFillStar>
                            </div>
                            <div className='flex gap-5'>
                                <BsCamera className='h-5 w-5' />
                                <BsCameraVideo className='h-5 w-5' />
                            </div>
                        </div>

                        <h3 className='text-xl font-white'>{place_name}</h3>
                        <p className='flex gap-3'><FaLocationArrow className='h-5 w-5'/> {location} </p>
                        <p className='flex gap-3'><FaCircleDollarToSlot className='h-5 w-5'/> From $ {price}</p>
                    </div>

                </div>
            </div>
          
        </Link>
    );
};

export default FeaturedTour;
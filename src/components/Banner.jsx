import { useGetBanner } from '../service/query/useGetBanner'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { UseGetCategory } from '../service/query/useGetCategory';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { data, isLoading } = useGetBanner()
    const { data: categor,  } = UseGetCategory('category')
    console.log(data);
  return (
    <div className='w-full'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            data?.map(item => (
                <SwiperSlide key={item.img}><img src={item.img} alt="" className='block w-full h-[300px] bg-cover bg-center' /></SwiperSlide>
            ))
        }
        
        
      </Swiper>
        <div className='flex gap-6 my-8 overflow-auto categry-scroll pl-[43px]'>
        { 
          categor?.map(item => (
            <Link className='flex items-center gap-x-4 bg-[#F6F6F6] min-w-[220px] p-2 '>
              <img className='w-[90px]' src={item.img} alt="" />
              <h3 className='text-center font-semibold'>{item.title}</h3>
            </Link>
          ))
        }
        </div>
    </div>
  )
}

export default Banner
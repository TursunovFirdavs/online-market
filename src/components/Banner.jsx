import { useGetBanner } from '../service/query/useGetBanner'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { UeseGetCategory } from '../service/query/useGetCategory';
import { Link } from 'react-router-dom';

const Banner = () => {
    const { data, isLoading } = useGetBanner()
    const { data: category,  } = UeseGetCategory()
    console.log(data);
  return (
    <div className='w-full h-[300px]'>
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
                <SwiperSlide><img src={item.img} alt="" className='block w-full h-[300px] bg-cover bg-center' /></SwiperSlide>
            ))
        }
        
        
      </Swiper>
        <div className='flex justify-between max-w-[1400px] m-auto my-8'>
        {
          category?.map(item => (
            <Link>
              <img src={item.img} alt="" />
            </Link>
          ))
        }
        </div>
    </div>
  )
}

export default Banner
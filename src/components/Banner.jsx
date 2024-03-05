import { useGetBanner } from '../service/query/useGetBanner'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const { data, isLoading } = useGetBanner()
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
    </div>
  )
}

export default Banner
import React from 'react'
import Banner from '../../components/Banner'
import { useGetTel } from '../../service/query/useGetTel'
import Slider from '../../components/Slider'
import Img1 from '../../assets/photo/aksiya1.png'
import Img2 from '../../assets/photo/aksiya2.png'
import Img3 from '../../assets/photo/aksiya3.png'
// import { useGetSingleCategory } from '../../service/query/useGetSingleCategory'

const Home = () => {
  const { data } = useGetTel()
  // const { data: komp } = useGetSingleCategory()
  return (
    <div>
      <Banner />
      <div className='max-w-[1400px] m-auto'>
        <h2 className='mb-6 font-semibold text-xl'>Смартфоны и планшеты</h2>
        <Slider data={data} />
      </div>
      <div className='bg-[#FEEE00] my-8 pb-8'>
        <div className='max-w-[1400px] m-auto'>
          <h3 className='text-3xl font-semibold pt-4 pb-6'>Акции</h3>
          <div className='flex justify-between'>
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
          </div>
        </div>
      </div>

      <div className='flex justify-between max-w-[1400px] m-auto'>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-2xl mb-10 mt-7'>Смартфоны и планшеты</h3>
          {
            data?.slice(0, 3).map(item => (
              <div className='flex gap-4'>
                <img className='w-[140px]' src={item.img} alt="" />
                <div className='w-[250px] flex flex-col justify-between py-2'>
                  <p>{item.title}</p>
                  <p className='font-semibold'>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-2xl mb-10 mt-7'>Ноутбуки, планшеты и компьютеры</h3>
          {
            data?.slice(4, 7).map(item => (
              <div className='flex gap-4'>
                <img className='w-[140px]' src={item.img} alt="" />
                <div className='w-[250px] flex flex-col justify-between py-2'>
                  <p>{item.title}</p>
                  <p className='font-semibold'>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-2xl mb-10 mt-7'>Смартфоны и планшеты</h3>
          {
            data?.slice(5, 8).map(item => (
              <div className='flex gap-4'>
                <img className='w-[140px]' src={item.img} alt="" />
                <div className='w-[250px] flex flex-col justify-between py-2'>
                  <p>{item.title}</p>
                  <p className='font-semibold'>{item.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='max-w-[1400px] my-[88px] m-auto'>
        <h2 className='mb-6 font-semibold text-xl'>Смартфоны и планшеты</h2>
        <Slider data={data} />
      </div>
    </div>
  )
}

export default Home
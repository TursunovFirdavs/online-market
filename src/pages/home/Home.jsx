import React from 'react'
import Banner from '../../components/Banner'
import { useGetTel } from '../../service/query/useGetTel'
import Slider from '../../components/Slider'
import Img1 from '../../assets/photo/aksiya1.png'
import Img2 from '../../assets/photo/aksiya2.png'
import Img3 from '../../assets/photo/aksiya3.png'

const Home = () => {
  const {data} = useGetTel()
  console.log(data);
  return (
    <div>
      <Banner/>
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
      
    </div>
  )
}

export default Home
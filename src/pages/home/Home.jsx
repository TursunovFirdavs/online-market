import React from 'react'
import Banner from '../../components/Banner'
import { useGetTel } from '../../service/query/useGetTel'
import Slider from '../../components/Slider'

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
      
    </div>
  )
}

export default Home
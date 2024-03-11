import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card';

const Like = () => {
  const { like } = useSelector(state => state.like)
  console.log(like);
  return (
    <div>
      {like.length &&
        <div className='max-w-[1400px] m-auto'>
          <h2 className='mb-6 font-semibold text-3xl mt-4'>Избранные товары</h2>
          <div className='flex gap-x-[100px] my-[50px] gap-y-[50px] flex-wrap'>
            {
              like?.map(item => <Card {...item} />)
            }
          </div>
        </div>
      }
    </div>
  )
}

export default Like
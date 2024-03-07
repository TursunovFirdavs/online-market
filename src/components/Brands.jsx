import React from 'react'
import Mi from '../assets/photo/mi.png'
import samsung from '../assets/photo/samsung.png'
import honor from '../assets/photo/honor.png'
import apple from '../assets/photo/apple.png'
import huawie from '../assets/photo/huawie.png'
import hp from '../assets/photo/hp.png'

const Brands = () => {
    const images = [ Mi, samsung, honor, apple, huawie, hp ]
  return (
    <div className='flex max-w-[1400px] m-auto justify-between'>
        {
            images.map(item => (
                <img src={item} alt="" />
            ))
        }
    </div>
  )
}

export default Brands
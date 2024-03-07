import React from 'react'
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from 'react-redux';



const Card = (product) => {
    const {like} = useSelector(state => state.like)
    console.log(like);

    const discount = (product.price / 100) * (100 - product.discount)
    // console.log(discount);
    return (
        <div className='bg-white pl-2 pr-3 relative'>
            <FiHeart className='absolute right-0 text-xl' />
            <img src={product.img} alt="" />
            <div className='pl-1  flex flex-col justify-between h-[120px]'>
                <h3 className='font-medium mt-1'>{product.title.length > 35 ? product.title.slice(0, 35) + ' ...' : product.title}</h3>
                <div>
                    {product.discount && 
                        <>
                            <p className='absolute top-[1px] left-[1px] text-sm px-1 rounded-lg bg-red-600 text-white'>-{product.discount}%</p>
                            <p className='text-sm line-through text-gray-700'>{product.price} сум</p>
                        </>
                    }
                    <div className='flex items-center justify-between pb-1'>
                        <p className='font-semibold text-xl'>{product.discount ? discount : product.price} сум</p>
                        <div className='bg-[#FEEE00] flex items-center justify-center w-9 h-7 border rounded-lg border-black/30'><BsCart3 className='text-xl' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
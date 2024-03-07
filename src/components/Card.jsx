import React, { useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { dislike, liked } from '../redux/reducers/like';
import SingleProductModal from './Single-product-modal';



const Card = (product) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const {like} = useSelector(state => state.like)
    const dispatch = useDispatch()
    console.log(like);

    const discounted = (product.price / 100) * (100 - product.discount)

    const openModal = () => {
        setOpenDialog(true)
        setSelectedItem({...product, discounted})
    }


    // console.log(discount);
    return (
        <div className='bg-white pl-2 pr-3 relative w-[200px]'>
            {like.findIndex(item => item.id == product.id) == -1 ?
                <FiHeart className='absolute right-0 text-xl' onClick={() => dispatch(liked(product))} />
                :
                <FcLike className='absolute right-0 text-xl' onClick={() => dispatch(dislike(product))} />
            }
            <img className='cursor-pointer' onClick={openModal} src={product.img}  alt="" />
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
                        <p className='font-semibold text-xl'>{product.discount ? discounted : product.price} сум</p>
                        <div className='bg-[#FEEE00] flex items-center justify-center w-9 h-7 border rounded-lg border-black/30'><BsCart3 className='text-xl' /></div>
                    </div>
                </div>
            </div>
            <SingleProductModal
                    isOpen={openDialog}
                    selectedItem={selectedItem}
                    handleClose={() => {
                        setOpenDialog(false);
                        setSelectedItem({});
                    }}
                />
        </div>
    )
}

export default Card
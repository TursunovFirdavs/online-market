import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux'
import { dislike, liked } from '../../redux/reducers/like';
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  const { like } = useSelector(state => state.like)
  console.log(cart);
  console.log(like);

  const dispatch = useDispatch()
  return (
    <div className='max-w-[1400px] m-auto'>
      <div>
        {cart.length &&
          <div className='flex justify-between'>
            <div className='border rounded-lg p-6'>
              <h2 className='mb-6 font-semibold text-5xl'>В корзине 2 товара</h2>
              {
                cart?.map(item => (
                  <div className='flex items-center justify-between w-[850px] border-b-2 py-3'>
                    <div className='flex gap-2 items-center'>
                      <img className='w-[150px]' src={item.img} alt="" />
                      <div className='flex flex-col gap-5'>
                        <p className='w-[350px] text-lg font-medium'>{item.title}</p>
                        <div className='flex gap-8'>
                          <div className='flex items-center gap-1'>
                            {like.findIndex(items => items.id == item.id) == -1 ?
                              <FiHeart onClick={() => dispatch(liked(item))} />
                              :
                              <FcLike onClick={() => dispatch(dislike(item))} />
                            }
                            <p>В избранное</p>
                          </div>
                          <div className='flex items-center gap-1'>
                            <RiDeleteBin6Line />
                            <p>Удалить</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-10'>
                      <div className='flex border rounded-lg overflow-hidden items-center'>
                        <button className='text-2xl bg-gray-100 w-8 pb-[2px]'>-</button>
                        <p className='text-md w-10 text-center'>1</p>
                        <button className='text-2xl bg-gray-100 w-8 pb-[2px]'>+</button>
                      </div>
                      <div>
                        {item.discount ? 
                          <>
                            <p className='text-lg font-normal line-through text-gray-700'>{item.price} сум</p>
                            <p className='text-2xl font-medium text-[#DA002B]'>{item.discounted} сум</p>
                          </>
                          :
                          <p className='text-2xl font-medium'>{item.price} сум</p>
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='w-[475px] border'></div>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
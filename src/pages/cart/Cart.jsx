import React from 'react'
import { FiHeart } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux'
import { dislike, liked } from '../../redux/reducers/like';
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart, toggleAmount } from '../../redux/reducers/cart';
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  const { like } = useSelector(state => state.like)
  console.log(cart);
  console.log(like);

  const dispatch = useDispatch()

  const handleRemove = (item) => {
    if(item.productCount > 1){
      dispatch(toggleAmount({type: 'remove', id: item.id}))
    }
    else {
      dispatch(removeFromCart(item))
    }
  }
  return (
    <div className='max-w-[1400px] m-auto'>
      <div>
        {cart.length ?
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
                              <FiHeart className='cursor-pointer' onClick={() => dispatch(liked(item))} />
                              :
                              <FcLike className='cursor-pointer' onClick={() => dispatch(dislike(item))} />
                            }
                            <p>В избранное</p>
                          </div>
                          <div onClick={() => dispatch(removeFromCart(item))} className='flex cursor-pointer items-center gap-1'>
                            <RiDeleteBin6Line />
                            <p>Удалить</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center gap-10'>
                      <div className='flex border rounded-lg overflow-hidden items-center'>
                        <button onClick={() => handleRemove(item)} className='text-2xl bg-gray-100 w-8 pb-[2px]'>-</button>
                        <p className='text-md w-10 text-center'>{item.productCount}</p>
                        <button onClick={() => dispatch(toggleAmount({type: 'add', id: item.id}))} className='text-2xl bg-gray-100 w-8 pb-[2px]'>+</button>
                      </div>
                      <div className='w-[165px]'>
                        {item.discount ? 
                          <>
                            <p className='text-lg font-normal line-through text-gray-700'>{item.overalPrice} сум</p>
                            <p className='text-2xl font-medium text-[#DA002B]'>{item.overalDiscounted} сум</p>
                          </>
                          :
                          <p className='text-2xl font-medium'>{item.overalPrice} сум</p>
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='w-[475px] border'>
              {cart?.reduce((a,b) => {
                return b.discount ? a + b.overalDiscounted : a + b.overalPrice
              },0)}
            </div>
          </div>
          :
          <div className='flex flex-col items-center mt-[70px]'>
                <img src={'https://www.krosfitsports.com/public/empty-cart.gif'} alt="" />
                <h3 className='text-4xl mb-4 text-gray-700 mt-5 font-bold'>Ваша корзина пуста</h3>
                <Link to={'/'} className=' bg-[#FEEE00] rounded-lg px-3 py-1' >Покупки сейчас</Link>
            </div>
        }
      </div>
    </div>
  )
}

export default Cart
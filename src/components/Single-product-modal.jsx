import { Dialog } from '@headlessui/react'
import { useState } from 'react';
import { CgClose } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, toggleAmount } from '../redux/reducers/cart';

export default function SingleProductModal(props) {
  const { isOpen, selectedItem, handleClose } = props
  const { cart } = useSelector(state => state.cart)
  console.log(cart);

  const dispatch = useDispatch()

  const handleRemove = (item) => {
    console.log(item);
    if(item.productCount > 1){
      dispatch(toggleAmount({type: 'remove', id: item.id}))
    }
    else {
      dispatch(removeFromCart(item))
    }
  }


  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[850px] rounded relative bg-white">
          <Dialog.Title>
            <div className='flex items-center justify-between px-[40px] py-[45px] '>
              <button onClick={handleClose} className='absolute top-3 right-4'><CgClose className='text-xl' /></button>
              <img className='w-[320px]' src={selectedItem?.img} alt="" />
              <div className='w-[430px]'>
                <h2 className='text-3xl font-bold'>{selectedItem?.title}</h2>
                <p className='text-lg py-4 text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus illum sapiente accusantium velit modi ipsum!</p>
                <div>
                  {selectedItem?.discount ?
                    <>
                      <div className='flex justify-between'>
                        <p className='text-lg font-semibold line-through text-gray-700'>{selectedItem?.price} сум</p>
                        <p className='w-10 text-sm font-normal flex items-center justify-center px-1 rounded-lg bg-red-600 text-white'>-{selectedItem?.discount}%</p>
                      </div>
                      <p className='text-3xl font-bold'>{selectedItem?.discounted} сум</p>
                    </> :
                    <p className='text-3xl font-bold' >{selectedItem?.price}</p>
                  }
                  <div>
                    {
                      cart.findIndex(item => item.id == selectedItem?.id) !== -1 ?
                        (
                          <div className='w-full text-center flex items-center justify-between bg-gray-100 mt-6'>
                            {cart.map(item => 
                              item.id == selectedItem?.id && 
                              <button onClick={() => handleRemove(item)} className='text-3xl pb-1 bg-gray-300 w-[70px]'>-</button>
                            )}
                            <p className='text-xl'>
                              {cart.find(item => item.id == selectedItem?.id).productCount}
                            </p>
                            <button onClick={() => dispatch(toggleAmount({type: 'add', id: selectedItem.id}))} className='text-3xl pb-1 bg-gray-300 w-[70px]'>+</button>
                          </div>
                        ) :
                        <button onClick={() => dispatch(addToCart(selectedItem))} className='w-full py-1 text-lg font-medium m-auto text-center block mt-6 bg-[#FEEE00]'>В корзину</button>

                    }
                  </div>

                </div>
              </div>
            </div>
          </Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
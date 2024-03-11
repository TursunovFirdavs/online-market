import { Dialog } from '@headlessui/react'
import { useState } from 'react';
import { CgClose } from "react-icons/cg";

export default function SingleProductModal(props) {
    const {isOpen, selectedItem, handleClose} = props


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
                        <button className='w-full py-1 text-lg font-medium m-auto text-center block mt-6 bg-[#FEEE00]'>В корзину</button>
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
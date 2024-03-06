import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UeseGetCategory } from '../service/query/useGetCategory'


export default function CategoryModal(props) {
//   let [isOpen, setIsOpen] = useState(true)
  const {isOpen, selectedItem, handleClose} = props
  const { data } = UeseGetCategory()


  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[700px] rounded bg-white">
          <Dialog.Title>
            <div className='flex flex-wrap justify-between px-[50px] py-[30px] '>
                {
                    data?.map(item => (
                        <div className='w-[130px]'>
                            <img className='' src={item.img} alt="" />
                            <h3 className='text-center'>{item.title}</h3>
                        </div>
                    ))
                }
            </div>
          </Dialog.Title>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { UseGetCategory } from '../service/query/useGetCategory'
import { Link } from 'react-router-dom'


export default function CategoryModal(props) {
//   let [isOpen, setIsOpen] = useState(true)
  const {isOpen, selectedItem, handleClose} = props
  const { data } = UseGetCategory()


  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen bg-black/60 m-auto items-center justify-center p-4 ">
        <Dialog.Panel className="w-[700px] rounded bg-white">
          <Dialog.Title>
            <div className='flex flex-wrap justify-between gap-y-5 px-[55px] py-[40px] '>
                {
                    data?.map(item => (
                        <Link onClick={handleClose} to={`/category/${item.datakey}`} className='w-[130px]'>
                            <img src={item.img} alt="" />
                            <h3 className='text-center font-medium'>{item.title}</h3>
                        </Link>
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
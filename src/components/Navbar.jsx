import React from 'react'
import Logo from '../assets/photo/logo.svg'
import { IoIosMenu } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center px-10 py-5 gap-[55px]'>
            <img src={Logo} alt="" className='px-6' />
            <div className='flex gap-[32px] flex-1'>
                <div className='flex items-center gap-1 bg-[#FEEE00] py-2  pl-3 pr-10 '>
                    <IoIosMenu className='text-xl' />
                    <p className='text-lg'>Каталог</p>
                </div>
                <form className='flex items-center justify-between border border-[#857372] px-4 flex-1'>
                    <input type="text" placeholder='Поиск' className='w-full outline-none h-full' />
                    <IoSearch />
                </form>
            </div>
            <div className='flex items-center gap-8'>
                <Link className='flex flex-col items-center'>
                    <MdOutlineAccountCircle className='text-xl' />
                    <p>Войти</p>
                </Link>
                <Link className='flex flex-col items-center'>
                    <FaRegHeart className='text-xl' />
                    <p>Избранное</p>
                </Link>
                <Link className='flex flex-col items-center relative'>
                    <BsCart3 className='text-xl' />
                    <p>Корзина</p>
                    <div className='absolute top-[-5.8px] right-3 bg-red-600 text-white text-[13px] w-4 h-4 rounded-full flex items-center justify-center'>3</div>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
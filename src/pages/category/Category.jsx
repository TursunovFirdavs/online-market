import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleCategory } from '../../service/query/useGetSingleCategory'
import Card from '../../components/Card'

const Category = () => {
  const { name } = useParams()
  const { data } = useGetSingleCategory(name)
  const [title, setTitle] = useState('')
  console.log(name);

  useEffect(() => {
    switch (name) {
      case 'tv':
        setTitle('Телевизоры и аудио')
        break;
      case 'tel':
        setTitle('Смартфоны и планшеты')
        break;
      case 'kitchens':
        setTitle('Все для кухни')
        break;
      case 'laptop':
        setTitle('Ноутбуки, компьютеры')
        break;
      case 'texnik':
        setTitle('Бытовая техника')
        break;
      case 'avto':
        setTitle('Автотовары')
        break;
      case 'furniture':
        setTitle('Мебель')
        break;
      case 'sport':
        setTitle('Спорт товары')
        break;
      default: setTitle('')
    }
  }, [])

  console.log(data);
  console.log(title);
  return (
    <div className='max-w-[1400px] m-auto'>
        <h2 className='mb-6 font-semibold text-3xl mt-4'>{title}</h2>
      <div className=' flex gap-x-[100px] my-[50px] gap-y-[50px] flex-wrap'>
      {data?.map(item => (
        <Card {...item} />
      ))}
    </div>
    </div>
  )
}

export default Category
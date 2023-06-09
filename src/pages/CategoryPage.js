import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'


const CategoryPage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const category = location.pathname.split('/').at(-1)
  return (
    <div className='max-w-[670px] w-11/12 py-8 flex flex-col gap-y-7 my-[66px] mx-auto'>
      <Header/>
      <div>
        <button
        className='rounded-md px-4 py-1 border-2'
        onClick={()=>{navigation(-1)}}
        >
          Back
        </button>
        <h2 className='mt-4 text-lg font-semibold'>
          Blogs Category <span>#{category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
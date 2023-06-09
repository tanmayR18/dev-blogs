import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,handlerPageChange, totalPages} = useContext(AppContext)
  return (
    <div className='w-full flex justify-center items-center border fixed left-0 bottom-0 bg-white'>
      <div className='w-11/12 max-w-[670px] flex justify-between py-2'>
        <div className='flex gap-2'>
          {
            page > 1 && 
            <button
            className='rounded-md px-4 py-1 border-2'
            onClick={()=> handlerPageChange(page-1)}>
              Previous
            </button>
          }

          {
            page < totalPages && 
            <button 
            className='rounded-md px-4 py-1 border-2'
            onClick={()=> handlerPageChange(page+1)}>
              Next
            </button>
          }
        </div>


        <p
        className='font-bold'
        >
          page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination
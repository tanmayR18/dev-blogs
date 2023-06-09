import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import './Blogs.css'
import BlogsDetails from './BlogsDetails'

const Blogs = () => {
  const {loading, posts} = useContext(AppContext)
  
  return (
    
    <div className='flex flex-col gap-y-6'>
    
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? 
          (
            //If no posts are passed
            <div>
              <p>No Post Found</p>
            </div>
          ) : 
          (
            //Making a cards from posts data
            posts.map( post => (
              <BlogsDetails key={post.id} post={post} />
            )
            )
          )
        )
      }


    </div>
  )
}


export default Blogs

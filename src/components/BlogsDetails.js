import { computeHeadingLevel } from '@testing-library/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogsDetails = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className=' font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p className=' text-sm mt-[4px]'>
        By 
        <span className=' italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
          <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>
      <p className=' text-sm mt-[4px]'>Posted on {post.date}</p>
      <p className=' text-md mt-[14px]'>{post.content}</p>
      <div className='flex gap-x-2'>
        {post.tags.map( (tag,index)=>(
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
            <span 
            className='text-blue-700 font-bold mt-[4px] text-xs'>
              {`#${tag}`}
            </span>
          </NavLink>
        ))}
      </div>



            {/* <div key={post.id}>
                <p className=' font-bold text-lg'>{post.title}</p>
                <p className=' text-sm mt-[4px]'>By <span className=' italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                <p className=' text-sm mt-[4px]'>Posted on {post.date}</p>
                <p className=' text-md mt-[14px]'>{post.content}</p>
                <div className='flex gap-x-2'>
                  {
                    post.tags.map( (tag,index) => (
                      <span key={index}
                      className='text-blue-700 font-bold mt-[4px] text-xs'
                      >{`#${tag}`}</span>
                    ))
                  }
                </div>
            </div> */}

    </div>
  )
}

export default BlogsDetails
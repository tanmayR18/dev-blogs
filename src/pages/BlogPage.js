import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Header from '../components/Header'
import { Spinner } from '../components/Spinner'
import { baseUrl } from '../baseUrl'
import BlogsDetails from '../components/BlogsDetails'


const BlogPage = () => {

  const [blog, setBlogs] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const location = useLocation()
  const navigation = useNavigate()
  const {loading, setLoading} = useContext(AppContext)
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"

  const blogId = location.pathname.split('/').at(-1)

  async function fetchRelatedBlogs(){
    setLoading(true)
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`
    try{
      const result = await fetch(url)
      const data = await result.json()

      setBlogs(data.blog)
      setRelatedBlogs(data.relatedBlogs)
    }
    catch(err){
      console.log("Error occured while fetching blogs related data")
      setBlogs(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs()
    }
  },[location.pathname])

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
        </div>

        {
          loading ? (<Spinner/>) :
          blog ? 
          (<div>
            <BlogsDetails post={blog}/>
            <h2 className=' text-xl font-bold my-6'>Related Blogs:</h2>
            <div className='flex flex-col gap-y-6'>
              {
                relatedBlogs.map((post)=>(
                  <div key={post.id}>
                    <BlogsDetails post={post} />
                  </div>
                ))
              }
            </div>
          </div>):(<div>No Related Blogs Found </div>)
        }

    </div>
  )
}

export default BlogPage

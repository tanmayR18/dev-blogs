import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()


    //data fetching
    async function fetchBlogPost(page = 1, tag = null, category = null ){
        try{
            setLoading(true)
            let url = `${baseUrl}?page=${page}`
            if(tag){
                url += `&tag=${tag}`
            }
            if(category){
                url += `&category=${category}`
            }
            const result = await fetch(url)
            const data = await result.json()

            setPage(data.page)
            setPosts(data.posts)
            setTotalPages(data.totalPages)
            
        }
        catch(err){
            console.log("error occured while fetching")
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlerPageChange(page){
        setPage(page)
        navigate({search:`?page=${page}`})
    }

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        posts,
        setPosts,
        fetchBlogPost,
        handlerPageChange
    }

    return <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>
    
}




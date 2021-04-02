import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import Pagination from './Pagination'
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(data)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className='container mt-5'>
      <h3 className='App'>
        My Blog
      </h3>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination posts={posts.length} postPerPage={postsPerPage} paginate={paginate} />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import './App.css'
import Post from './Post.jsx'

function App() {
  const [count, setCount] = useState(1)
  const [currentUser, setCurrentUser] = useState([])
  const [post, setPost] = useState([])
  const [selectedPost, setSelectedPost] = useState(0)

  useEffect(() => {
    if (count > 10) {
      setCount(1)
      return
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then((res) => res.json())
    .then((data) =>{
      setCurrentUser(data)
    })
    .catch((err) => console.warn(err))

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${count}`)
    .then((res) => res.json())
    .then((data) =>{
      setPost(data)
    })
    .catch((err) => console.warn(err))
  }, [count])

  return (
    <>
    {selectedPost}
       <button onClick={() => setCount(count + 1)}>{count}</button>
       {currentUser.name}
       <div className='post-wrapper'>
          {post.map((posts) => (
            <Post 
            key={post.id}
            posts = {posts}
            selectedPost = {selectedPost}
            setSelectedPost = {setSelectedPost} />
          ))}
       </div>
       
      
    </>
  )
}

export default App

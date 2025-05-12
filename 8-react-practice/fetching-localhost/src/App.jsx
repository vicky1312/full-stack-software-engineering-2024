import { useState, useEffect } from 'react'
import './App.css'
import Book from "./Book"

function App() {
  const [bookie, setBookie] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/bookie/")
    .then(res => res.json())
    .then(data => setBookie(data))
  }, [])

  console.log(bookie)
  return <>
  {bookie.map((book) => {
    <Book book = {book} />
  })

  }
  </>
  
}

export default App

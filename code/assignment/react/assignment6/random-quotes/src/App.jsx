import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState("")
  const [quotes, setQuotes] = useState([""])
  const [quoteAmount, setQuoteAmount] = useState("")

  useEffect(() => {
    fetch ("https://quoteslate.vercel.app/api/tags")
    .then ((res) => res.json())
    .then ((data) => {setTags(data)})
    .catch ((err) => console.warn(err))


      fetch (`https://quoteslate.vercel.app/api/quotes/random?tags=${selectedTag}&count=3`)
      .then ((res) => res.json())
      .then ((data) => {setQuotes(data)})
      .catch ((err) => console.warn(err))
      return 
   
  }, [selectedTag])

  return (
  
        <div className='quote-wrapper'>
          <div className='tag-menu'>
          <h2>Select a quote from the dropdown</h2>
          <select
          name = "tags"
          value = {selectedTag}
            onChange = {(e) => setSelectedTag(e.target.value)}
          >
          {tags.map((t) => (
            <option key = {t} value = {t}> 
              {t}
            </option>
          ))} 
          </select>
          </div>

          <div className='quote-box'>
            <p>{quotes[0].quote}</p>
          </div>
   
      </div>
    
  )
}

export default App

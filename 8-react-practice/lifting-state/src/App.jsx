import './App.css'
import { useState } from 'react'
import InputFields from './Input'
import ContentBox from './Content'
function App() {
  const categories = ["mammal", "bird", "reptiles", "amphibians"]
  const [list, setList] = useState([])
  return (
    <>
     <InputFields 
     categories = {categories}
     list = {list}
     setList = {setList}/>
     
     <div className='category-wrapper'>
     {categories.map((c) => (
        <ContentBox
        contentList = {list.filter((item) => item.type === c)}
        list = {list}
        key = {c}
        title = {c}

        />
     ))}
     </div>
   
    </>
    
  )
}

export default App

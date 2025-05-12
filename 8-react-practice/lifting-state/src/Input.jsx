import { useState } from "react"

function InputFields({categories, list, setList}){
    

    const [name, setName] = useState("")
    const [type, setType] = useState("")


    const handleSubmit = (e) => {
        const newItem = {name, type}
        setList([...list, newItem])
    }

    
    const buttonEnabled = type && name.trim().length > 0
    let submitButton
    if (buttonEnabled){
        submitButton = <button  onClick={handleSubmit}>Submit</button>
    } else {
        submitButton = <button disabled  onClick={handleSubmit}>Submit</button>
    }

    return <>
    <input type="text" placeholder="type here..." onChange={(e) => {setName(e.target.value)}}/>
    {categories.map((c) => (
        <li key={c}>
            <input type="radio" name="category" id={c} value={c} onChange={(e) => {setType(e.target.value)}} />
            <span>{c}</span>
        </li>
    ))}
    {submitButton}
   
    </>
}

export default InputFields
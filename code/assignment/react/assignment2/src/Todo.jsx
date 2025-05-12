import { useState } from "react"
import './Todo.css'

function Todo ({task, completed, onDelete, onToggle }){
  let completeButton

    if (completed === true){
      completeButton = <span className="">completed</span>
    }else{
      completeButton = <span className="">incomplete</span>
    }
 

    return (
        <>
            <div className="todos">
            <span className="todo-list" >{task}</span>
            <div className="todo-button">
            <button className="status-button" onClick={onToggle}>{completeButton}</button>
            <button className="delete-button" onClick={onDelete}>delete</button>
            </div>
            </div>
        </>
    )
}
export default Todo
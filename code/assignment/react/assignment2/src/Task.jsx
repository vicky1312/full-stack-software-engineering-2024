import { useState } from "react"
import "./Task.css"
function Tasks({toDo, setTodo}){

    const [newTask, setNewTask] = useState("")
    const handleSubmit = () =>{
        if (newTask.trim().length === 0){
            return
        }else{
            const taskList = {
                id: toDo.length + 1,
                task: newTask,
                completed: false
            }
            setTodo ([...toDo, taskList])
        }
        
    }
    return(
        <>
         <div className="todo-input">
        <input type="text" onChange={(e => setNewTask(e.target.value))} placeholder="add a new todo..."/>
        <button className="task-button" onClick={handleSubmit}>Add</button>
        </div>
        </>
    )
   
}

export default Tasks
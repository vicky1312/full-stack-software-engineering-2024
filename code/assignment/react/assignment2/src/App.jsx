import './App.css'
import Todo from './Todo'
import Tasks from './Task'
import { useState } from 'react'
function App() {
 
  const [toDo, setTodo] = useState ([
    // { id: 1, task: "Serve the dog", completed: true },
    // { id: 2, task: "wash the dishes", completed: false },
    // { id: 3, task: "study", completed: false },
    // { id: 4, task: "buy groceries", completed: false },
    // { id: 5, task: "visit the library", completed: false },
    // { id: 6, task: "make dinner", completed: false },
])

const todoTask = (id) => {
  setTodo((updateStatus) => updateStatus.map((e) => 
      e.id === id ? {...e, completed: !e.completed }: e
  ))
}
const deleteTask = (id) => {
  setTodo((delToDo) => delToDo.filter((e) => e.id !== id))
}
  return (
      <>
      <div className='topic-section'>
      <h2>TODOS</h2>
      <div className='input-wrapper'>
      <Tasks
        toDo = {toDo}
        setTodo = {setTodo}
     />
      </div>
    <div className='todo-wrapper'> {toDo.map(e => (
      <Todo 
      key = {e.id}
      task = {e.task}
      setTask = {e.task}
      completed = {e.completed}
      onToggle = {() => todoTask(e.id)}
      onDelete = {() => deleteTask(e.id)}
      />
      
     ))}
     </div>
      </div>
      
     </>
  )
}

export default App

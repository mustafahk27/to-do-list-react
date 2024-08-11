import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo'
import { v4 as uuidv4} from 'uuid'
uuidv4();

const ToDoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
  return (
    <div className='TodoWrapper'>
        <h1>Things To Do!</h1>
      <ToDoForm addTodo = {addTodo}/>
      {todos.map((todo, index) => 
        <Todo task = {todo} key = {index}/>
    )}
    </div>
  )
}

export default ToDoWrapper

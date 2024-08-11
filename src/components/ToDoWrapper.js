import React, {useState} from 'react'
import ToDoForm from './ToDoForm'

const ToDoWrapper = () => {
    const[todos, setTodos] = useState([])
  return (
    <div className='TodoWrapper'>
      <ToDoForm/>
    </div>
  )
}

export default ToDoWrapper

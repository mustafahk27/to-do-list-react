import React from 'react'
import ToDoWrapper from './ToDoWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import EditToDoForm from './EditToDoForm'

const Todo = ({task, toggleComplete, deleteToDo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick = {() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon = {faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon = {faTrash} onClick={()=> deleteToDo(task.id)}/>
        </div>
    </div>
  )
}

export default Todo

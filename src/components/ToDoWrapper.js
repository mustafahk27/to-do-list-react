import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo'
import { v4 as uuidv4} from 'uuid'
import EditToDoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete = id =>{
        setTodos(todos.map(todo => todo.id == id ? {...
            todo, completed: !todo.completed} : todo))
        }
    const deleteToDo = id =>{
        setTodos(todos.filter(todo=> todo.id != id))
    }
    const editTodo = id =>{
      setTodos(todos.map(todo=> todo.id == id ? {...
        todo, isEditing: !todo.isEditing} : todo
      ))
    }
    const editTask = (task, id) => {
      setTodos(todos.map(todo=> todo.id == id ? {...todo, task, isEditing: !todo.isEditing}: todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Things To Do!</h1>
      <ToDoForm addTodo = {addTodo}/>
      {todos.map((todo, index) => (todo.isEditing ? 
        (
          <EditToDoForm editTodo={editTask} task ={todo}/>
        ) :
        <Todo task = {todo} key = {index} toggleComplete={toggleComplete} deleteToDo = {deleteToDo} editTodo={editTodo}/>
      )
    )}
    </div>
  )
}

export default ToDoWrapper

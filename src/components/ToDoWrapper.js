import React, { useState } from 'react'
import { uuidV4 } from 'web3-utils'
import { EditTodoForm } from './EditToDoForm';
import { Todo, ToDo } from './Todo';
import { ToDoForm } from './ToDoForm'
uuidV4();

export const ToDoWrapper = () => {
  const [todos,setTodos]=useState([])
  const addTodo = todo =>{
    setTodos([...todos,{id:uuidV4(),task:todo,completed:false,isEditing:false}])
    console.log(todos)
  }

  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,completed : !todo.completed} : todo))
  }

  const deleteTodo = id=>{
setTodos(todos.filter(todo=> todo.id!== id))
  }

  const editTodo = id=>{
    setTodos(todos.map(todo =>todo.id===id ? {...todo,isEditing:!todo.isEditing} : todo))
  }

  const editTask = (task, id) =>{
setTodos(todos.map(todo => todo.id ===id ? {todo,task,isEditing: !todo.isEditing}: todo))
  }



  return (
  <div className='TodoWrapper'>
    <h1>Let's get things done ♡
    </h1>
<ToDoForm addTodo={addTodo}/>
{todos.map((todo,index)=>(
  todo.isEditing ?(
    <EditTodoForm editTodo={editTask} task={todo}/>
  ) :(
  <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo ={deleteTodo} editTodo={editTodo}/>
)))}
  </div>
  )
}

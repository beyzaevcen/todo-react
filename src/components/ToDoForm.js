import { useState } from "react"

export const ToDoForm = ({addTodo}) => {
  const[value,setValue] =useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value);
    setValue("")
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input' value={value}
    placeholder='Enter a todo :)' onChange={(e)=>setValue(e.target.value)}>
    </input>
    <button type='submit' className='todo-btn'>Add ToDo</button>
      </form>
  )
}

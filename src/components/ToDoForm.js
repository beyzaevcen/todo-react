import { useState } from "react"

export const ToDoForm = () => {
  const[value,setValue] =useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(value)
  }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
    <input type="text" className='todo-input'
    placeholder='Enter a todo :)' onChange={(e)=>setValue(e.target.value)}>
    </input>
    <button type='submit' className='todo-btn'>Add ToDo</button>
      </form>
  )
}

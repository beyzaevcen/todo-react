import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}></FontAwesomeIcon>
      </div>
    </div>
  )
}

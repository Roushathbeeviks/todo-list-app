
import React from 'react'
import './TodoList.css'
function TodoList({todos,status,deleteTodo}) {
  return (
    <div>
      {todos.map((todo) =>(
        <div className='list-input'>
            <input value={todo.status} onClick={() => status(todo.id)}  type='checkbox'></input>
            <p>{todo.text}</p>
            <i class="fa fa-ban" onClick={() => deleteTodo(todo.id)} aria-hidden="true"></i>
        </div>
        ))}
    </div>
  )
}
export default TodoList

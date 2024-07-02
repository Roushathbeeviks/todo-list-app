import React from 'react';
import './TodoItem.css'

function TodoItem({ todo, status, deleteTodo }) {
  return (
    <div className='list-input'>
    <input value={todo.status} onClick={() => status(todo.id)} checked={todo.status} type='checkbox'></input>
    <p>{todo.text}</p>
    <i class="fa fa-ban" onClick={() => deleteTodo(todo.id)} aria-hidden="true"></i>
    </div>
      );
      };
    
  

export default TodoItem


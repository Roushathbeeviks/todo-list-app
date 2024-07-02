import React from 'react'
import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [todo,setTodo] = useState('');
    const todoSubmit = (e) => {
      e.preventDefault();
      if (todo.trim()) {
        addTodo(todo);
        setTodo('');
      }
    };
      return (
      <div className='input'>
         <input type="text"  value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add your skill..." 
         style={{display:'flex', justifyContent:'space-between'}} />
          <i onClick={todoSubmit} className="fas fa-plus"></i>
      </div>
    );
  };

 
export default TodoInput

  
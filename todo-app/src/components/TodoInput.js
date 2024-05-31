import React from 'react'
import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [todo,setTodo] = useState('');
    const addTodo = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        addTodo(inputValue);
        setInputValue('');
      }
    };
      return (
      <div className='input'>
         <input type="text"  value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="🖊️ Add item..." 
         style={{display:'flex', justifyContent:'space-between'}} />
          <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
    );
  };

 
export default TodoInput

  
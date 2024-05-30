import React from 'react'
import { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim()) {
        addTodo(inputValue);
        setInputValue('');
      }
    };
      return (
      <div className='input'>
         <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="🖊️ Add item..." 
         style={{display:'flex', justifyContent:'space-between'}} />
          <i onClick={handleSubmit} className="fas fa-plus"></i>
      </div>
    );
  };

 
export default TodoInput

  
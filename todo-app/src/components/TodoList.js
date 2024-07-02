
import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos,status,deleteTodo}) {
  return (
    <div>
      {todos.map((todo) =>(
        <div>
          <TodoItem key={todo.id} todo={todo} toggleComplete={status} deleteTodo={deleteTodo}/>
        </div>
        ))}
    </div>
  )
}
export default TodoList

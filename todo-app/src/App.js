import './App.css';
import { useState,useEffect } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos,setTodos] = useState([]) //for the set of value
  const [todo,setTodo] = useState('') // for input fields(typing letters)

  useEffect(()=>{
    const initial=[{id:1, text:'React',status:false}, {id:2, text:'Angular',status:true}];
    setTodos(initial)},[])

    const addTodo = (text) => {
      const newTodo = { id: Date.now(), text, status: false };
      setTodos([...todos, newTodo]);
    };
    const status = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, status: !todo.status } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  

  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's my skill set  🌝☕ </h2>
    </div>
    <div>
      <TodoInput addTodo={addTodo}/>
      <TodoList  todos= {todos} status={status} deleteTodo={deleteTodo}   />
    </div>
  </div>
  );
}

export default App;

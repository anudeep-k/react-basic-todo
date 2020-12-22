import React, { useState } from 'react'
import Todo from './Todo';

const Todolist = () => {

    const [todos,setTodos] =useState([]);
    const submitHandler =(value)=>{
       setTodos([...todos,value])
    }
    const removeHandler=(index)=>{
        const newlist = [...todos];
        newlist.splice(index, 1);
        setTodos(newlist);
    }
    return (
        <div>
             <h1>Make your To do List!</h1>

             <Todo  handleSubmit={submitHandler}/>

             {
                 todos.length? todos.map((todo,i)=>{
                     return (
                         <ul>
                         <li key={todo}>
                        {todo.value}     
                        <button onClick={()=>removeHandler(i)}>delete</button>
                        </li>  
                        </ul>
                     )
                 }):null
             }
        </div>
    )
}

export default Todolist

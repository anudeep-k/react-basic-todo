import React, { useEffect, useState } from "react";

const Todo = (props) => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {}, [list]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  const addHandler = () => {
    console.log(value);
    let newList = [...list, value];
    console.log(newList);
    setList(newList);

    setValue("");
  };

  const removeHandler = (i) => {
    const newlist = [...list];
    newlist.splice(i, 1);
    setList(newlist);
  };

  const submitHandler =(e)=>{
      e.preventDefault();
       let valueobj={
           id:Math.random()*10000,
           value:value
       }
      props.handleSubmit(valueobj);
      setValue("");

  }
  return (
    <form className="todo-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add a todo"
        value={value}
        name="text"
        className="todo-input"
        onChange={changeHandler}
      />
      <button className="todo-button" >Add todo</button>
    </form>
    // <div>
    //   <input value={value} onChange={changeHandler} />
    //   <button onClick={addHandler}>Add</button>

    //   {list.length
    //     ? list.map((item,i) => {
    //         return (
    //           <ul>
    //             <li>
    //               {item} <button onClick={()=>{removeHandler(i)}}>delete</button>
    //             </li>
    //           </ul>
    //         );
    //       })
    //     : null}
    // </div>
  );
};

export default Todo;

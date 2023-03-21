import { useState } from "react";
import "./Form.css";

function Form({ setData }) {

    const [todo , setTodo] = useState('')
    console.log(todo)
    const handleSubmit = (e) => {
        e.preventDefault()
        let item = {
            id: Date.now() ,
            text: todo,
            selected: false
        }
        setData((prev) => {
            return [...prev , item]
        })
        setTodo('')

    }
    return(
        <form className="form" onSubmit={handleSubmit}>
          <input className="input" type="text" placeholder="Add new list item"    autoFocus required autoComplete="off" onChange={(e) => {
            setTodo(e.target.value.trim())
          }}  
          value={todo}/>
          <button className="btn">Add</button>
        </form>
    )
}

export default Form;

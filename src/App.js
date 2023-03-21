import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
    const [data , setData] = useState([])
     
    // select qismi
    const updateData = (id) => {
        const newData = data.map((item) => {
            if(item.id === id){
                return {...item , selected: !item.selected}
            }
            return item
        })
        setData(newData)
    }

    // ochirish qismi
    const deleteData = (id) => {
        const newData = data.filter((item) => {
            return item.id !== id
        })
        setData(newData)
    }

    return <div className="App">
        <div className="container">
           <h1 className="title">Daily To Do List</h1>
           <Form setData={setData}/>
           <TodoList data={data} updateData={updateData} deleteData={deleteData}/>
           <hr />
           <footer>
            <p>Items: <span className="score">{data.length}</span></p>
            <button onClick={() => {
                setData([])
            }}>Clear All</button>
           </footer>
        </div>
    </div>;
}

export default App;

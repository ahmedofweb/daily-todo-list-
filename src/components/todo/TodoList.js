import React from "react";
import { useState } from "react";
import "./TodoList.css";
import Modal from "../Modal/Modal";

function TodoList({data , updateData , deleteData , editeData}) {

    const [show , setShow] = useState(false)
    const [editId , setEditId] = useState('')
    const [editedText, setEditedText] = useState('')

    return (
        <ul className="list">
            {
                data && data.map((todo)=>{
                    return(
                        <li key={todo.id} className="list-item">
                        <div className="item-text" onClick={()=>{
                            updateData(todo.id)                            
                        }}>
                            {
                                todo.selected ? (<div className="circle select">
                                <svg
                                    width="14"
                                    height="10"
                                    viewBox="0 0 14 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.66666 5.66667L4.99999 9L12.3333 1.66667"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>) : (<div className="circle"></div>)
                            }
        
                            <p>{todo.text}</p>
                            
                        </div>
                        
                         <button className="edite-btn" onClick={()=> {
                            if(todo.selected){
                            }else{
                                setShow(true)
                                setEditId(todo.id)
                                setEditedText(todo.text)
                            }
                        }}>
                        <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="#464455"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 5H9c-1.886 0-2.828 0-3.414.586C5 6.172 5 7.114 5 9v6c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h6c1.886 0 2.828 0 3.414-.586C19 17.828 19 16.886 19 15v-3m-9.681.691 5.93-5.863a1.276 1.276 0 0 1 1.815 1.792l-5.831 6.05L9 15l.319-2.309Z"
                                    />
                                </svg>     
                        </button>

                        <button className="delete-btn" onClick={() => {
                            deleteData(todo.id)
                        }}> 
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                fill="none"
                            >
                                <mask
                                    id="a"
                                    width="32"
                                    height="32"
                                    x="0"
                                    y="0"
                                    maskUnits="userSpaceOnUse"
                                    style={{ maskType: "luminance" }}
                                >
                                    <path fill="#fff" d="M32 0H0v32h32V0Z" />
                                </mask>
                                <g fill="red" mask="url(#a)">
                                    <path d="M11 26.885h1.656a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1H11a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13ZM15.172 26.885h1.656a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1h-1.656a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13ZM19.344 26.885H21a.925.925 0 0 0 .828-1v-13a.925.925 0 0 0-.828-1h-1.656a.925.925 0 0 0-.828 1v13a.925.925 0 0 0 .828 1Zm.172-14h1.312v13h-1.312v-13Z" />
                                    <path d="M25.395 3.855h-3.479v-.8a1.412 1.412 0 0 0-1.41-1.41h-9.012a1.412 1.412 0 0 0-1.41 1.41v.8H6.6a2.857 2.857 0 0 0-2.854 2.854v1.707a2 2 0 0 0 2 2v15.938a4 4 0 0 0 4 4h12.5a4 4 0 0 0 4-4V10.416a2 2 0 0 0 2-2V6.709a2.857 2.857 0 0 0-2.851-2.854Zm-14.311-.8a.41.41 0 0 1 .41-.41h9.012a.41.41 0 0 1 .41.41v.8h-9.832v-.8Zm13.166 23.3a2.006 2.006 0 0 1-2 2H9.75a2.006 2.006 0 0 1-2-2V10.416h16.5v15.939Zm2-18.791v.853H5.75V6.71a.853.853 0 0 1 .854-.854h18.791a.853.853 0 0 1 .855.854v.854Z" />
                                </g>
                            </svg>
                        </button> 
                    </li>
                    )
                })
            }
            {show && <Modal setShow={setShow} itemId={editId} editeData={editeData} editedText={editedText} data={data}/>}
        </ul>
    );
}

export default TodoList;

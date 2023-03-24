import './Modal.css'
import '../form/Form.css'
import { useState } from 'react'

function Modal({setShow , itemId , editeData , editedText}){
   
   const [inputVal , setInputVal ] = useState(editedText)

   const formSubmit = (e) => {
      e.preventDefault()
      console.log("Form Submited")
      editeData(itemId , inputVal)
      setShow(false)
   }


    return(
       <div className="modal">
          <h2 className='modal-title'>Edit the item !</h2>
          <form className='form' onSubmit={(e) => formSubmit(e)}>
            <input 
              type = "text" 
              className = 'input' 
              placeholder = "Edit list item..." 
              required 
              value = {inputVal}
              autoComplete = "off" 
              onChange = {(e) => {setInputVal(e.target.value)}}/>
            <button className='btn'>Add</button>
          </form>
          <button className = 'btn' onClick={() => {
            setShow(false)
          }}>Close</button>
       </div>

    )
}

export default Modal
import React from 'react'
import './Modal.css'

const Modal = ({isOpen, closeModal}) => {
    return(
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <h1>1</h1>
            <button onClick={closeModal}>Close Modal</button>
        </div>
    )
}
export default Modal
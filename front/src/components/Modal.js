import React from 'react'
import './Modal.css'


const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalDialogClick = (e) => {
                e.stopPropagation();
            }

    return (

        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick} >
            {children}
            </div>
        </div>
    )
}

export default Modal;

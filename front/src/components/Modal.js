import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, question, onDelete, excerpt}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    // const handleDeleteQuestion = (i) => {
    //     i.onDelete(question)
    // }

    return (
        <div className= {excerpt ? 'question-excerpt' : 'question'}>

        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <p>Estas seguro de eliminar?</p>
                {/* <button onClick={handleDeleteQuestion}>Si</button> */}
                <button onClick={() => onDelete(question.id)}>Si</button>
                <button onClick={closeModal}>No</button>

            </div>
        </div>

        </div>
    )
}
export default Modal
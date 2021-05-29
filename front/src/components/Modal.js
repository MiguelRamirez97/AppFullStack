import React from 'react'
import './Modal.css'
import { connect } from 'react-redux'
// import {deleteQuestion} from "../actions/questionActions"


const Modal = ({ children, isOpen, closeModal }) => {

    const handleModalDialogClick = (e) => {
                e.stopPropagation();
            }

    return (

        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}></div>
            {children}
        </div>
    )
}

export default Modal;



// const Modal = ({ isOpen, closeModal, question, excerpt, onDelete }) => {

//     const handleModalDialogClick = (e) => {
//         e.stopPropagation();
//     }

//     return (



//         <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
//             <div className="modal__dialog" onClick={handleModalDialogClick}>
//                 <p>Estas seguro de eliminar?</p>
//                 {/* <button onClick={() => onDelete(question.id)}>Si</button> */}
//                 {/* <button onClick={}>Si</button> */}
//                 {console.log(question)}
//                 <button onClick={closeModal}>No</button>

//                 </div>
//             </div>



//     )

// }
// // export default Modal
// const mapStateToProps = state => ({
//     questions: state.question,
// })

// export default connect(mapStateToProps)(Modal) 
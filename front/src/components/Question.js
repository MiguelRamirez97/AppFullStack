import React from 'react'
import { Link } from 'react-router-dom'
import useModal from './hooks/useModal';
import Modal from './Modal'
// import './Modal.css'
// import {Modal, ModalBody,ModalFooter,FormGroup} from 'reactstrap';


export const Question = ({ question, excerpt, onDelete }) => {  
  
  const [isOpenModal,openModal, closeModal ] = useModal();

//   const handleModalDialogClick = (e) => {
//     e.stopPropagation();
// }

  return (
    <article className={excerpt ? 'question-excerpt' : 'question'}>
      <h2>{question.question}</h2>
      <p>{question.category} - <small>{question.type}</small></p>

      {excerpt && (
        <Link to={`/question/${question.id}`} className="button">
          View Question
        </Link>
      )}
      
      {onDelete && (
        <button className="button right" onClick={openModal}> DELETE</button>
        )}


    

      <Modal 
      isOpen={isOpenModal}
      closeModal={closeModal}         
      >
      
    </Modal>

    {isOpenModal && (<Modal />)}

    {/* {isOpenModal && (
<Modal className={`modal ${openModal && 'modal-open'}`} onClick={closeModal}>
        <ModalBody className="modal__dialog" onClick={handleModalDialogClick}>
          <FormGroup>
            <p>Estas seguro de eliminar?</p>
          </FormGroup>
          <button color="primary"onClick={() => onDelete(question.id)}>si</button>
          <button color="secondary"onClick={closeModal}>no</button>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
)}

      {onDelete && (
        <button className="button right" onClick={openModal}> DELETE</button>
      )} */}



    </article>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import useModal from './hooks/useModal'
import Modal from './Modal'

import './Modal.css'


export const Question = ({ question, excerpt, onDelete, isOpen }) => {

  const [isOpenModal, openModal, closeModal] = useModal();

  return (
    <div className={excerpt ? 'question-excerpt' : 'question'}>
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

      <div>
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
        >

          <h3>Estas seguro de eliminar?</h3>
          <button onClick={() => onDelete(question.id)}>Si</button>
          {console.log(question)}
          <button onClick={closeModal}>No</button>

        </Modal>

      </div>
    </div>


  )

}
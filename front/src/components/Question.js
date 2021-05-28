import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

export const Question = ({ question, excerpt, onDelete }) => {  
  
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <article className={excerpt ? 'question-excerpt' : 'question'}>
      <h2>{question.question}</h2>
      <p>{question.category} - <small>{question.type}</small></p>

      {excerpt && (
        <Link to={`/question/${question.id}`} className="button">
          View Question
        </Link>
      )}

      <Modal 
      isOpen={isOpenModal}
      closeModal={closeModal} />
      <button onClick={openModal}>open modal</button>

      {isOpenModal && (<Modal />)}

      {onDelete && (
        <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
      )}
    </article>
  )
}

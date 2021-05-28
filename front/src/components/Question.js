import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Modal,ModalBody,ModalFooter,FormGroup} from 'reactstrap';

export const Question = ({ question, excerpt, onDelete }) => {

  const [state,setState]=useState(false);

  const openModal = () => {
    setState(!state)
  }

  return (
    <article className={excerpt ? 'question-excerpt' : 'question'}>
      <h2>{question.question}</h2>
      <p>{question.category}  - <small>{question.type}</small></p>
      {onDelete && (
        <button className="button right" onClick={openModal}>DELETE</button>
      )}
      {excerpt && (
        <Link to={`/question/${question.id}`} className="button">
          View Question
        </Link>
      )}
      <Modal isOpen={state}>
        <ModalBody>
          <FormGroup>
            <p>Estas seguro de eliminar?</p>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <button color="primary"onClick={() => onDelete(question.id)}>si</button>
          <button color="secondary"onClick={openModal}>no</button>
        </ModalFooter>
      </Modal>
    </article>
  )
}

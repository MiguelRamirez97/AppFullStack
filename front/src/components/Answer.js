import React from 'react'
import useModal from './hook/useModal'
import Modal from './Modal'


export const Answer = ({ answer, excerpt, question, onDelete }) => {

  const [isOpenModal, openModal, closeModal] = useModal();


    return (

    <div className={excerpt ? 'answer-excerpt' : 'answer'}>
      <div className="answer">
      
      {onDelete && (
        <button className="button right" onClick={openModal}>DELETE</button>
        )}

        <p>{answer.answer}</p>

        </div>


        <div>
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
        >

          <h3 className="pregunta">Estas seguro de eliminar?</h3>
          <button className="btn_modal color1" onClick={() => onDelete(answer.id)}>Si</button>
          <button className="btn_modal color2" onClick={closeModal}>No</button>

        </Modal>

      </div>
    </div>
  )

}

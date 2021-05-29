import React from 'react'

export const Answer = ({ answer }) => (
  <aside className="answer">
    <p>{answer.answer}</p>
  </aside>

  <div className={excerpt ? 'question-excerpt' : 'question'}>
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
      </div>
      

)

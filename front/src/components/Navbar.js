import React from 'react'
import { Link } from 'react-router-dom'

export const PublicNavbar = () => (
  <nav >
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav >
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">AddQuestion</Link>
      <Link to="/list">MyQuestions</Link>
      <Link to="/answers">MyAnswers</Link>
    </section>
  </nav>
)

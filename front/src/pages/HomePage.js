import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({ children }) => (
  <section className="container">
    <div className="flip-box">
      <div className="flip-box-inner">
        <h1 className="flip-box-front">Home</h1>
        <div className="developers">
          <p>By</p>
          <p>Miguel Ramirez</p>
          <p> Adriana Franklin</p>
        </div>
      </div>
    </div>
    <div className="welcome">
        <div>
          {children}
        </div>
        <p>welcome to the question and answer app.</p>

    <Link to="/questions" className="button">
      View Questions
    </Link>
    </div>
  </section>
)
export default HomePage

import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchOwnerAnswers, deleteAnswer } from '../actions/questionActions'
import { Answer } from '../components/Answer'

const OwnerAnswersPage = ({ dispatch, loading, answers, hasErrors, redirect }) => {
    useEffect(() => {
        const userId =  localStorage.getItem("uid");
        dispatch(fetchOwnerAnswers(userId))
    }, [dispatch]);

    useEffect(() => {
        if (redirect) {
            const userId =  localStorage.getItem("uid");
            dispatch(fetchOwnerAnswers(userId))
        }
    }, [redirect, dispatch]);

    const onDelete = (id) => {
        dispatch(deleteAnswer(id))
    }


    const renderAnswers = () => {
        if (loading) return <p>Loading answers...</p>
        if (hasErrors) return <p>Unable to display answers.</p>

        return answers.map(answer => <Answer
            key={answer.id}
            answer={answer}
            excerpt onDelete={onDelete} />)
    }

    return (
        <section>
            <h1>Answers</h1>
            {renderAnswers()}
        </section>
    )
}

const mapStateToProps = state => ({
    //loading: state.answer.loading,
    answers: state.answer.answers,
    hasErrors: state.answer.hasErrors,
    redirect: state.answer.redirect,
})

export default connect(mapStateToProps)(OwnerAnswersPage)
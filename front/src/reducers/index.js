import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import answersReducer from './answersReducer';

const rootReducer = combineReducers({
    question: questionsReducer,
    answer: answersReducer
})

export default rootReducer

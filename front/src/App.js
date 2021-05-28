import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCQlyh1esompje783804BM4bb6S_kKU68o",
  authDomain: "frontappfullstack-8e528.firebaseapp.com",
  projectId: "frontappfullstack-8e528",
  storageBucket: "frontappfullstack-8e528.appspot.com",
  messagingSenderId: "651417219966",
  appId: "1:651417219966:web:c44deb3a5055d5a20b392f",
  measurementId: "G-X5HHVCDQR9"
});

const auth = firebase.auth();


const App = () => {
  const [user] = useAuthState(auth);
  if (user?.uid) {
    localStorage.setItem("uid", user?.uid);
  }
  return (
    <Router>
      {user ?
        <>
          <PrivateNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignOut /></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Redirect to="/" />
          </Switch>
        </> :
        <>
          <PublicNavbar />
          <Switch>
            <Route exact path="/" component={() => {
              return <HomePage><SignIn /></HomePage>
            }} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Redirect to="/" />
          </Switch>
        </>
      }
    </Router>
  )
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="button right"
        onClick={() => {
          localStorage.removeItem("uid");
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}


export default App

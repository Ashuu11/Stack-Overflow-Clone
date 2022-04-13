import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';             
import './HomeMainbar.css';
import QuestionList from './QuestionList';

const HomeMainbar = () => {

  const location = useLocation()

  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector(state => state.questionReducer)
  //console.log(questionsList)

//    var questionsList  = [{
//      _id: 1,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 2,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["java","nodejs","reactjs","mongodb","expressjs"],
//      userPosted: "ashu",
//      userId: 1,
//      askedOn: "Jan 1",
//      answer: [{
//            answerBody: "Answer",
//            userAnswered: "kumar",
//            answeredon: "Jan 2",
//            userId: 2,
//      }]
//    },{
//      _id: 2,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 0,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["javascript","R","python"],
//      userPosted: "ashu",
//      askedOn: "Jan 1",
//      userId: 1,
//      answer: [{
//          answerBody: "Answer",
//          userAnswered: "kumar",
//          answeredon: "Jan 2",
//          userId: 2,
//    }]
//    },{
//      _id: 3,
//      upVotes: 3,
//      downVotes: 2,
//      noOfAnswers: 0,
//      questionTitle: "What is function?",
//      questionBody: "It meant to be",
//      questionTags: ["javascript","R","python"],
//      userPosted: "ashu",
//      askedOn: "Jan 1",
//      answer: [{
//        answerBody: "Answer",       
//        userAnswered: "kumar",
//        answeredon: "Jan 2",
//        userId: 2,
//  }]
//    }]



  const checkAuth = () =>{
    if(user === null){
      alert("Login or Signup to ask a Question")
    navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }


  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList.data.length} questions</p>
                <QuestionList questionsList={questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
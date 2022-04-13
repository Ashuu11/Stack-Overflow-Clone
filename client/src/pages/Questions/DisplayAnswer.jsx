import React, { useState }  from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import Avatar from '../../components/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnswer } from '../../actions/question'



import './Questions.css'
import DisplayCommentAns from './DisplayCommentAns';
import CommentAns from './CommentAns';

const DisplayAnswer = ({question, handleShare}) => {

  const User = useSelector((state) => (state.currentUserReducer));
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showcomment, setshowcomment] = useState('');


  const handleDelete = (answerId, noOfAnswers) =>{
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
  }
  const handleComment = () => {
    setshowcomment(!showcomment);
}

  
  return (  
    <div>
        {
            question.answer.map((ans) => (
                <div className="display-ans" key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className="question-action-user">
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                                User?.result?._id === ans?.userId && (
                                    <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                                )
                            }
                        </div>
                        
                        <div>
                            <p>answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/Users/${ans.userId}`} className='user-link' style={{color: "#0086d8"}}>
                                <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                           </Link>
                        </div>
                        
                    </div>

                    <section>
                        <div style={{ margin: " 0px 0px 0px 50px" }}>
                            <DisplayCommentAns ansid={ans._id} key={ans._id} question={question} />
                        </div>
                    </section>
                    <div style={{ margin: " 0px 0px 0px 50px" }}>        
                    { !showcomment ? <CommentAns onClick={handleComment} ansid={ans._id}></CommentAns> : null }
                    </div> 

                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer
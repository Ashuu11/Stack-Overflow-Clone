import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestioncom } from '../../actions/question'

const DisplayComment = ({question }) => {

  const User = useSelector((state) => (state.currentUserReducer));
  const dispatch = useDispatch();
  const { id } = useParams()

  const handleDeletee = (quecommentId) =>{
    dispatch(deleteQuestioncom(id, quecommentId))
  }
  
  return (  
    <div>
        {
            question.comment.map((com) => (
                <div className="display-ans" key={com._id} style={{display: "flex"}}>
                     <p className='comment-ans'><span><Link to={`/Users/${com.userId}`} style={{color: "#0086d8", textDecoration: "none"}}>{com.userCommented}</Link></span> &nbsp; {com.commentBody} &nbsp;
                     <small>{moment(com.commentedOn).fromNow()}</small></p>  
                     {
                      User?.result?._id === com?.userId && (
                          <button type='button' onClick={() => handleDeletee(com._id)} style={{
                            backgroundColor: "transparent",
                            border: "none",
                            padding: "5px 0px",
                            paddingLeft: "6px",
                            margin: "0px 10px 0px 0px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "#DC143C",
                      }}>Delete</button>
                  )
              }     
                </div>
            ))
        }
    </div>
  )
}

export default DisplayComment
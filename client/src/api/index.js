import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req
})

export const logIn = (authData) => API.post('/user/login', authData);
export const signUP = (authData) => API.post('/user/signup', authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData);
export const getAllQuestions = () => API.get('questions/get');
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value, userId) => API.patch(`/questions/vote/${id}`, { value, userId})
export const postComment = (id, commentBody, userCommented, userId) => API.patch(`/comment/postcomment/${id}`, {commentBody, userCommented, userId })
export const postCommentans = (id, ansId, commentBody, userCommented, userId) => API.patch(`/comment/postcommentans/${id}`, {ansId, commentBody, userCommented, userId})
export const deleteAnswercom = (id, anscommentId) => API.patch(`/comment/delete/${id}`, {anscommentId})
export const deleteQuestioncom = (id, quecommentId) => API.patch(`/comment/deletecom/${id}`, {quecommentId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/${id}`, {noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = ( id, answerId, noOfAnswers ) => API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers })

export const fetchAllUsers = () => API.get('/user/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/user/update/${id}`, updateData)
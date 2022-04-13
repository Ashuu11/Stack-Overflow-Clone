import express from 'express';

import { postComment, postCommentans, deleteAnswercom, deleteQuestioncom } from '../controllers/Comments.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.patch('/postcomment/:id', auth , postComment);
router.patch('/postcommentans/:id', auth , postCommentans);
router.patch('/delete/:id', auth, deleteAnswercom)
router.patch('/deletecom/:id', auth, deleteQuestioncom)

export default router;
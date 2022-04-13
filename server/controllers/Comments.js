import mongoose from 'mongoose';
import Questions from '../models/Questions.js';

export const postComment = async(req, res) =>{
    const { id:_id } = req.params;
    const { commentBody, userCommented } = req.body;
    const userId = req.userId;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('This is not a valid Question')
    }

    try {
        const updatedQuestioncomment = await Questions.findByIdAndUpdate( _id, { $addToSet: {'comment': [{commentBody, userCommented, userId }]}});
        res.status(200).json(updatedQuestioncomment);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteQuestioncom = async(req, res) => {
    const { id:_id } = req.params;
    const { quecommentId } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('This is not a valid Question')
    }

    if(!mongoose.Types.ObjectId.isValid(quecommentId)){
        return res.status(404).send('Comment Unavailable')
    }

    try {
        await Questions.updateOne(
            { _id },
            { $pull : { 'comment': { _id: quecommentId } } }
        )
    } catch (error) {
        res.status(405).json(error)
    }
}

export const postCommentans = async(req, res) =>{
    const { id:_id } = req.params;
    const { ansId, commentBody, userCommented} = req.body;
    const userId = req.userId;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('This is not a valid Question')
    }

    try {
        const updatedQuestioncommentans = await Questions.findByIdAndUpdate( _id, { $addToSet: {'commans': [{ansId, commentBody, userCommented, userId }]}});
        res.status(200).json(updatedQuestioncommentans);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteAnswercom = async( req, res) => {
    const { id:_id } = req.params;
    const { anscommentId } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('This is not a valid Question')
    }

    if(!mongoose.Types.ObjectId.isValid(anscommentId)){
        return res.status(404).send('Comment Unavailable')
    }

    try {
        await Questions.updateOne(
            { _id },
            { $pull: { 'commans': { _id: anscommentId } } }
        )
        res.status(200).json({ message: "Successfully Deleted..."})
    } catch (error) {
        res.status(405).json(error)
    }

}


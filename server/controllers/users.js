import mongoose from 'mongoose';
import User from '../models/auth.js';

export const getAllUsers = async (req, res) =>{
    try {
        const allUsers = await User.find();
        const allUserDeatails = []
        allUsers.forEach(users => {
            allUserDeatails.push({ _id: users._id, name: users.name, about: users.about, tags: users.tags, joinedOn: users.joinedOn})
        }) 
        res.status(200).json(allUserDeatails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateProfile = async (req, res) =>{
    const { id: _id} = req.params;
    const { name, about, tags} = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...');
    }

    try {
        const updatedProfile = await User.findByIdAndUpdate( _id, {$set: {'name': name, 'about': about, 'tags': tags}}, { new: true})
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message})
    }
}
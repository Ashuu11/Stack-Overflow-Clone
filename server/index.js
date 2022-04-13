import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import questionRoutes from './routes/Questions.js';
import answerRoutes from './routes/Answers.js';
import commentRoutes from './routes/Comments.js'; 

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req, res) => {
    res.send("This is a StackOverflow Clone API")
});

app.use('/user', userRoutes )
app.use('/questions', questionRoutes )
app.use('/answer', answerRoutes)
app.use('/comment', commentRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}))
        .catch((err) => console.log(err.message))
import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
    author: { type: String },
    content: { type: String },
    date: { type: String },
    alarm: { type: String, default: 0 },
    type: { type: Boolean },  //true: belong to board, false: belong to comment
    super: { type: String },    // _id
    like: { type: String, default: 0 },
    dislike: { type: String, default: 0 }
});

export default mongoose.model('comment', Comment);

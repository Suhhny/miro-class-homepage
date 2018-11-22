import mongoose from 'mongoose';

const Comment = new mongoose.Schema({
    author: { type: String },
    content: { type: String },
    date: { type: String },
    alarm: { type: String },
    type: { type: Boolean },  //true: belong to board, false: belong to comment
    super: { type: String }    // _id
});

export default mongoose.model('comment', Comment);

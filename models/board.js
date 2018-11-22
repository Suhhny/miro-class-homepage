import mongoose from 'mongoose';

const Board = new mongoose.Schema({
    category: String,
    title: String,
    author: String,
    content: String,
    date: String,
    tag: { type: Array, default: [] },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
})

export default mongoose.model('board', Board);
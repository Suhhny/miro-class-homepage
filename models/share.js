import mongoose from 'mongoose';

const Share = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    content: { type: String },
    created_at: { type: String },
    dummy: { type: String }
})

export default mongoose.model('share', Share);
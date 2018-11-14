import mongoose from 'mongoose';

const Class = mongoose.Schema({
    title: { type: String },
    author: { type: String },
    content: { type: String },
    classDate: { type: String },
    dummy: { type: String }
});

export default mongoose.model('class', Class);
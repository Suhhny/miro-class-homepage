import mongoose from 'mongoose';

const Activity = new mongoose.Schema({
    author: String,
    type: Boolean,  //true: board, false: comment
    target_id: String,
    target_author: String
})

export default mongoose.model('activity', Activity);
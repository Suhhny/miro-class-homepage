import mongoose from 'mongoose';

const Activity = mongoose.Schema({
    author: {type: String},
    type: {type: Boolean, default: true},  //true: board, false: comment
    target: {type: String}  // _id
});

export default mongoose.model('activity', Activity);
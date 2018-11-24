import mongoose from 'mongoose';

const Tags = mongoose.Schema({
    tags: { type: Array, default: []}
})

export default mongoose.model('tag', Tags);

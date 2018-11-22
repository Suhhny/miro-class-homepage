import mongoose from 'mongoose';

const Tag = new mongoose.Schema({
    tags: Array
})

export default mongoose.model('tag', Tag);
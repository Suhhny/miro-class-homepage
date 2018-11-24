/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/comment/dislike
    METHOD: POST
    DESCRIPTION: Comment disliking process on BoardShow

    QUERY: {
        id: string
        type: string
    }

    BODY: {
        comment: string
    }

    res.data: {
        success: Bool
        comment: { Comment }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: no error
*/

import express from 'express';
const router = express.Router();

import { Comment } from '../../models';

router.post('/', async (req, res) => {
    try{
        const comment = await Comment.findOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false, error: 0 }));
        
        if(!comment){
            return res.status(404).json({ success: false, error: 1 });
        }
        
        await comment.dislike++;
        await comment.save().catch(() => res.status(500).json({ success: false, error: 0 }));
        
        return res.status(204).json({ success: false, error: 0 });    
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
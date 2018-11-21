/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/log/comment
    METHOD: GET
    DESCRIPTION: myComment showing process on myPage

    QUERY: {
        name: string
    }

    BODY: { }

    res.data: {
        success: Bool
        myComment: { Comment }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
*/

import express from 'express';
const router = express.Router();

import { Comment } from '../../models';

router.get('/', async (req, res) => {
    try{
        const myComment = await Comment.find({ author: req.query.name })
                                .sort({ _id: -1 })
                                .catch(() => res.status(500).json({ success: false, error: 0 }));

        return res.status(200).json({ success: true, myComment });
        
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
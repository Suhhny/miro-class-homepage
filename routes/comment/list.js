/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/comment/list
    METHOD: GET
    DESCRIPTION: Comment showing process on BoardShow

    QUERY: {
        id: string
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
        1: 
*/

import express from 'express';
const router = express.Router();

import { Comment } from '../../models';

router.get('/', async (req, res) => {
    try{        
        const comment = await Comment.find({ super: req.query.id })
                                    .sort({ _id: -1 })
                                    .catch(() => res.status(500).json({success: false, error: 0 }));
        
        
        return res.status(200).json({ success: true, comment });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
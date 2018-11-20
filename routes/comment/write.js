/*
    AUTHOR: Suhhny
    CREATED: 20181120
    UPDATED: 20180916

    RESOURCE: /api/comment/write
    METHOD: POST
    DESCRIPTION: Comment writing process on BoardShow

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
        1: unauthorized access

*/

import express from 'express';
const router = express.Router();

import comment from '../../models';

router.post('/', async (req, res) => {
    const { content, type, _super } = req.body;
    try{
        if(type !== false){
            let belong_to = Board.findOne({ _id: _super });
        }else{
            let
        }

    }catch{

    }
});

export default router;
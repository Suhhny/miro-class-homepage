/*
    AUTHOR: wingtee
    CREATED: 20181125

    RESOURCE: /api/board/like
    METHOD: POST
    DESCRIPTION: board like up
    
    QUERY: {
        id: string
    }
    BODY: {}

    RESPONSE: {
        success: boolean
        board: { Board }
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: unauthorized access
        2: no board found
*/

import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

import { Board } from '../../models';

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token'];
    const { authorized } = jwt.decode(token);

    if(!authorized){
        return res.status(409).json({ success: false, error: 1 });
    }

    try{
        const board = await Board.findOne({ _id: req.query.id });
        if(!board){
            return res.status(404).json({ success: false, error: 2 });
        }
        ++board.like;

        return res.status(200).json({ success: true, board });
    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
})

export default router;
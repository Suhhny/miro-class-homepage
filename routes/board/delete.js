/*
    AUTHOR: wingtee
    CREATED: 20181125

    RESOURCE: /api/board/delete
    METHOD: DELETE
    DESCRIPTION: board delete
    
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
        3: not the author
*/

import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

import { Board, Comment } from '../../models';

router.get('/', async (req, res) => {
    const token = req.headers['x-access-token'];
    const { authorized, name } = jwt.decode(token);

    if(!authorized){
        return res.status(409).json({ success: false, error: 1 });
    }

    try{
        const board = await Board.findOne({ _id: req.query.id });
        const comments = await Comment.find({ super: req.query.id });

        if(!board){
            return res.status(404).json({ success: false, error: 2 });
        }
        if(!admin && (name != board.author)){
            return res.status(409).json({ success: false, error: 3 });
        }

        Board.deleteOne({ _id: req.query.id });
        for(let i = 0; i < comments.length; i++){
            await Comment.deleteMany({ super: comments[i]._id });
        }
        Comment.deleteMany({ super: req.query.id });

        return res.status(200).json({ success: true });
    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
})

export default router;
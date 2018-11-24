/*
    AUTHOR: wingtee
    CREATED: 20181124

    RESOURCE: /api/board/write
    METHOD: POST
    DESCRIPTION: board write
    
    QUERY: {}
    BODY: {
        content: string
        title: string
        category: string
    }

    RESPONSE: {
        success: boolean
        board: { Board }
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: unauthorized access
*/

import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';

import { Board } from '../../models';

router.post('/', async (req, res) => {
    const { content, title, category } = req.body;
    const token = req.headers['x-access-token'];
    const { authorized, name } = jwt.decode(token);

    if(!authorized){
        return res.status(409).json({ success: false, error: 1 });
    }

    try{
        const board = new Board({ category, title, author: name, content, date: new Date() });
        board.save();

        return res.status(200).json({ success: true, board });
    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
})

export default router;
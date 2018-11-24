/*
    AUTHOR: wingtee
    CREATED: 20181125

    RESOURCE: /api/board/list
    METHOD: GET
    DESCRIPTION: board list
    
    QUERY: {
        category: string
    }
    BODY: {}

    RESPONSE: {
        success: boolean
        boards: { Board }
    }

    ERROCODE
        -1: invalid token
        0: extra error
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
        const boards = await Board.find({ category: req.query.category });
        if(!boards){
            return res.status(404).json({ success: false, error: 2 });
        }

        return res.status(200).json({ success: true, boards });
    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
})

export default router;
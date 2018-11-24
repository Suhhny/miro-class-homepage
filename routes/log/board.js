/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/log/board
    METHOD: GET
    DESCRIPTION: myBoard showing process on myPage

    QUERY: {
        name: string
    }

    BODY: { }

    res.data: {
        success: Bool
        myBoard: { Board }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
*/

import express from 'express';
const router = express.Router();

import { Board } from '../../models';

router.get('/', async (req, res) => {
    try{
        const myBoard = await Board.find({ author: req.query.name })
                                .sort({ _id: -1 })
                                .catch(() => res.status(500).json({ success: false, error: 0 }));

        return res.status(200).json({ success: true, myBoard });
        
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
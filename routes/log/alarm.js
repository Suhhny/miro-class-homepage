/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/log/alarm
    METHOD: GET
    DESCRIPTION: Activity showing process on myPage

    QUERY: {
        name
    }

    BODY: { }

    res.data: {
        success: Bool
        activity: { Activity }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: no activity
*/

import express from 'express';
const router = express.Router();

import { Activity, Board, Comment } from '../../models';

router.get('/', async (req, res) => {
    try{
        const board = await Board.find({ author: req.query.name });
        const comment = await Comment.find({ author: req.query.name });

        let activity = await Activity.find({}).catch(() => res.status(404).json({ success: false, error: 1 }));
        
        if(Activity.type!==false){
            activity = await Activity.find({ target: board._id })
                                        .sort({ id: -1 })
                                        .catch(() => res.status(500).json({ success: false, error: 0 }));

        }else{
            activity = await Activity.find({ target: comment._id })
                                        .sort({ id: -1 })
                                        .catch(() => res.status(500).json({ success: false, error: 0 }));
        }

        return res.status(200).json({ success: true, activity });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
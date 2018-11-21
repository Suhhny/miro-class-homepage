/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/log/alarmDelete
    METHOD: DELETE
    DESCRIPTION: Activity deleting process on myPage

    QUERY: {
        id
    }

    BODY: { }

    res.data: {
        success: Bool
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: no activity
*/

import express from 'express';
import { Activity } from '../../models';
const router = express.Router();

router.delete('/', async (req, res) => {
    try{
        const activity = await Activity.findOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false, error: 0 }));

        if(!activity){
            return res.status(404).json({ success: false, error: 1 });
        }

        await Activity.deleteOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false, error: 0 }));
        return res.status(204).json({ success: true });
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
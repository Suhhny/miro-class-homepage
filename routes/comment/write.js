/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/comment/write
    METHOD: POST
    DESCRIPTION: Comment writing process on BoardShow

    QUERY: {
        id: string
    }

    BODY: {
        comment: string
    }

    res.data: {
        success: Bool
        comment: { Comment }
        activity: { Activity }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: unauthorized access
*/

import express from 'express';
const router = express.Router();

import { Comment, Activity, Board } from '../../models';

router.post('/', async (req, res) => {
    const { content, type, name, _super } = req.body;

    try{
        const comment = new Comment({
           content,
           type,
           super: _super,
           date: new Date(),
           author: name
        });
        await comment.save().catch(() => res.status(500).json({ success: false, error: 0 }));
        
        let mother;
        if(type!==false){
            mother = await Board.findOne({ _id: _super });
        }else{
            mother = await Comment.findOne({ _id: _super });
        }

        const activity = new Activity({
            author: name,
            type: type !== false ? true : false,    // activity type same as comment type 
            target: mother._id
        });
        
        await activity.save().catch(() => res.status(500).json({ success: false, error: 0 }))
        
        return res.status(201).json({ success: true, comment, activity });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;



// in board

// if(activity){
//     if(activity.target === req.query.id){
//         board.alarm++;
//     }
// }

// in comment

// if(activity){
//     if(activity.target === req.query.id){
//         comment.alarm++;
//     }
// }













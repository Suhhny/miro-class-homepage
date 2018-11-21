/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/tag/list
    METHOD: GET
    DESCRIPTION: Tag showing process on AdminPage

    QUERY: { }

    BODY: { }

    res.data: {
        success: Bool
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: no tag
*/

import express from 'express';
const router = express.Router();

import { Tags } from '../../models';

router.get('/', async (req, res) => {
    try{
        const tag = await Tags.findOne({}).catch(() => res.status(500).json({ success: false, error: 0 }));
        
        if(!tag){
            return res.status(404).json({ success: false, error: 1 });
        }

        return res.status(200).json({ success: true, tag: tag.tags });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
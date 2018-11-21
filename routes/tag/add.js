/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/tag/add
    METHOD: POST
    DESCRIPTION: Tag adding process on AdminPage

    QUERY: { }

    BODY: { 
        addTag
    }

    res.data: {
        success: Bool
        tag: { Tags }
    }

    ERRORCODES
        -1: invalid token
        0: extra error
        1: no tag
*/

import express from 'express';
const router = express.Router();

import { Tags } from '../../models';

router.post('/', async (req, res) => {
    const { addTag } = req.body;

    try{
        const tag = await Tags.findOne({}).catch(() => res.status(500).json({ success: false, error: 0 }));

        if(!tag){
            return res.status(404).json({ success: false, error: 1 });
        }

        if(tag.tags.length!==0){
            tag.tags.push(addTag);
        }else{
            tag.tags[0] = addTag;
        }

        await Tags.save().catch(() => res.status(500).json({ success: false, error: 0 }));

        console.log(tag.tags);
        return res.status(200).json({ success: true, tag });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
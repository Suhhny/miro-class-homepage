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
        // const tag = new Tags({
        //     tags: addTag
        // });

        const tag = await Tags.updateOne({}, {$push: {tags: addTag}});
        const updated_tag = await Tags.findOne({}).catch(() => res.status(500).json({ success: false, error: 0 }));
        
        if(!tag){
            return res.status(404).json({ success: false, error: 1 });
        }

        // await tag.save().catch(() => res.status(500).json({ success: false, error: 0 }));
        
        return res.status(200).json({ success: true, tag: updated_tag.tags });

    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;

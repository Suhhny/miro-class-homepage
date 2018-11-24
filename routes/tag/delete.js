/*
    AUTHOR: Suhhny
    CREATED: 20181120

    RESOURCE: /api/tag/delete
    METHOD: DELETE
    DESCRIPTION: Tag deleting process on AdminPage

    QUERY: { }

    BODY: { 
        deleteTag
    }

    res.data: {
        success: Bool
        tag : { Tags }
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
    const { deleteTag } = req.body;

    try{
        const tag = await Tags.findOne({}).catch(() => res.status(500).json({ success: false, error: 0 }));
        
        if(!tag){
            return res.status(404).json({ success: false, error: 1 });
        }

        let index = await tag.tags.indexOf(deleteTag);
        let array1 = await tag.tags.slice(0, index);
        let array2 = await tag.tags.slice(index+1);

        tag.tags = array1.concat(array2);

        await tag.save().catch(() => res.status.json({ success: false, error: "으악 싫다!"}))

        return res.status(200).json({ success: true, tag: tag.tags });
    }catch(err){
        console.log(err);
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
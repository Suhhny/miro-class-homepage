import express from 'express';
const router = express.Router();

import { Class } from '../../models';

router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    try{
        const oneClass = new Class({
            title, 
            content, 
            author, 
            classDate: new Date()
        });

        await oneClass.save().catch(() => res.status(500).json({ success: false }));
        return res.status(201).json({ success: true, id: oneClass._id });
    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
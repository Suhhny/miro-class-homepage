import express from 'express';
const router = express.Router();

import { Share } from '../../models';

router.post('/', async (req, res) => {
    const { title, content, author } = req.body;
    try{
        
        const oneShare = new Share({
            title,
            content, 
            author,
            created_at: new Date()
        });

        await oneShare.save().catch(() => res.status(500).json({ success: false }));
        return res.status(201).json({ success: true, _id: oneShare.id });
    }catch{
        res.status(500).json({ success: false });
    }
});

export default router;
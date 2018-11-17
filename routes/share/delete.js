import express from 'express';
const router = express.Router();

import { Share } from '../../models';

router.delete('/', async (req, res) => {
    try{
        const oneShare = await Share.findOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false }));

        if(!oneShare){
            return res.status(404).json({ success: false });
        }

        await Share.deleteOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false }));
        return res.status(204).json({ success: true });

    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
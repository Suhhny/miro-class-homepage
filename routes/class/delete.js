import express from 'express';
const router = express.Router();

import { Class } from '../../models';

router.delete('/', async (req, res) => {
    try{
        const oneClass = await Class.findOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false }));

        if(!oneClass){
            return res.status(404).json({ success: false });
        }

        await Class.deleteOne({ _id: req.query.id }).catch(() => res.status(500).json({ success: false }));
        return res.status(204).json({ success: true });

    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
import express from 'express';
const router = express.Router();

import { Class } from '../../models';

router.get('/', async (req, res) => {
    try{
        const classList = await Class.find({})
                                    .sort({ _id: -1 })
                                    .catch(() => res.status(500).json({ success: false }));
        return res.status(204).json({ success: true, classList });

    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
import express from 'express';
const router = express.Router();

import { Class } from '../../models';

router.get('/', async (req, res) => {
    try{
        const oneClass = await Class.findOne({ _id: req.query.id })
                                    .catch(() => res.status(500).json({ success: false }));
        if(!oneClass){
            return res.status(404).json({ success: false });
        }
        return res.status(200).json({ success: true, oneClass });
    }catch{
        res.status(500).json({ success: false });
    }
});

export default router;
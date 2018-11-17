import express from 'express';
import { Share } from '../../models';
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const oneShare = await Share.findOne({ _id: req.query.id })
                                    .catch(() => res.status(500).json({ success: false }));
        if(!oneShare){
            return res.status(404).json({ success: false });
        }

        return res.status(200).json({ success: true, oneShare });
    }catch{
        res.status(500).json({ success: false });
    }
});

export default router;
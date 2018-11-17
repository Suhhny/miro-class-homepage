import express from 'express';
import { Share } from '../../models';
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const shareList = await Share.find({})
                                    .sort({ _id: -1 })
                                    .catch(() => res.status(500).json({ success: false }));
        return res.status(204).json({ success: true, shareList });
    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
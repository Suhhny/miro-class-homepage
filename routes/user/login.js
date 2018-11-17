import express from 'express';
const router = express.Router();

import jwt from 'jsonwebtoken';
import { User } from '../../models';
import { key } from '../../models/user';

router.post('/', async (req, res) => {
    const { password, email } = req.body;
    
    try{
        const oneUser = await User.findOne({ email }).catch(() => res.status(500).json({ success: false }));
        if(!oneUser){
            return res.status(404).json({ success: false });
        }

        if(!oneUser.validateHash(password)){
            res.status(409).json({ success: false });
        }

        const { _id, email, name, sex, major, studentId } = oneUser;
        const token = jwt.sign({ uid: _id, email, name, sex, major, studentId }, key);

        return res.status(200).json({ success: true, token });
    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;
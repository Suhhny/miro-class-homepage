import express from 'express';
const router = express.Router();

import { User } from '../../models';
import { key } from '../../models/user';
import jwt from 'jsonwebtoken';

router.post('/', async (req, res) => {
    const { email, name, studentId, sex, major, password } = req.body;
    const token = req.headers['x-access-token'];

    try{
        let does_email_exist = await User.findOne({ email }).catch(() => res.status(500).json({ success: false }));
        if(!does_email_exist){
            return res.status(409).json({ success: false, error: 1 });
        }

        let does_studentId_exist = await User.findOne({ studentId }).catch(() => res.status(500).json({ success: false }));
        if(!does_studentId_exist){
            return res.status(409).json({ success: false, error: 2 });
        }

        const salt = key + String(Date.now());

        const newUser = new User({
            email,
            name, 
            major, 
            studentId, 
            sex
        });

        newUser.password = newUser.generateHash(password, salt);

        await newUser.save().catch(() => res.status(500).json({ success: false }));

        token = jwt.sign({ uid: newUser._id, email, name, major, sex, studentId }, key);

        return res.status(201).json({ success: true, auth: { uid: newUser._id, email, name, major, sex, studentId, token }});

    }catch{
        return res.status(500).json({ success: false });
    }
});

export default router;






// Error
//     1: existing email
//     2: existing studentId
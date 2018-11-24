/*
    AUTHOR: wingtee
    CREATED: 20181123

    RESOURCE: /api/account/login
    METHOD: POST
    DESCRIPTION: login
    
    QUERY: {}
    BODY: {
        email: string
        password: string
    }

    RESPONSE: {
        success: boolean
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: wrong id
        2: wrong password
*/

import express from 'express';
const router = express.Router();
import jwt from 'jwt';

import { User } from '../../models';

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.find({ email }).catch(() => res.status(500).json({ success: false, error: 0 }));
        if(!user){
            return res.status(409).json({ success: false, error: 1 });
        }
        if(!user.validateHash(password)){
            return res.status(409).json({ success: false, error: 2 });
        }

        const { _id, name, major, studentId, sex, admin, description, authorized, profile_image, boards, comments } = user;
        const token = jwt.sign({ uid:_id, name, major, studentId, sex, admin, description, authorized, profile_image, boards, comments });
        return res.status(200).json({ success: true, account: _id, email, name, major, studentId, sex, admin, token })
    }catch(err){    
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
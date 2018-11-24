/*
    AUTHOR: wingtee
    CREATED: 20181123

    RESOURCE: /api/account/register
    METHOD: POST
    DESCRIPTION: register
    
    QUERY: {}
    BODY: {
        email: string
        password: string
        name: string
        major: string
        sex: boolean
        studentId: string
    }

    RESPONSE: {
        success: boolean
        account: { User }
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: existing email
*/

import express from 'express';
const router = express.Router();

import { User } from '../../models';
import { key } from '../../models/user';

router.post('/', async (req, res) => {
    const { email, password, name, major, sex, studentId } = req.body;

    try{
        if(await User.findOne({ email: req.body.email })){
            return res.status(409).json({ success: false, error: 1 });
        }

        const salt = key + String(Date.now());
        const user = new User({ email, name, major, sex, salt, studentId });
        user.password = user.generateHash(password, salt);

        await user.save();

        return res.status(204).json({ success: true })
    }catch(err){    
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
/*
    AUTHOR: wingtee
    CREATED: 20181123

    RESOURCE: /api/account/description
    METHOD: POST
    DESCRIPTION: change user description
    
    QUERY: {}
    BODY: {
        description: string
    }

    RESPONSE: {
        success: boolean
        User: { User }
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: unauthorized access
        2: no user found
*/

import express from 'express';
const router = express.Router();
import jwt from 'jwt';

import { User } from '../../models';

router.post('/', async (req, res) => {
    const token = req.headers['x-access-token'];
    const { _id } = jwt.decode(token);

    try{
        const user = await User.find({ _id: _id });
        user.description = req.body.description;
        await user.save();
        return res.status(204).json({ success: true });
    }catch(err){    
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
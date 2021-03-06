/*
    AUTHOR: wingtee
    CREATED: 20181122

    RESOURCE: /api/account/adminize
    METHOD: POST
    DESCRIPTION: adminize user
    
    QUERY: {
        id: string    //_id of target user
    }
    BODY: {}

    RESPONSE: {
        success: boolean
    }

    ERROCODE
        -1: invalid token
        0: extra error
        1: unauthorized access
        2: no user found
        3: unauthorized target user
*/

import express from 'express';
const router = express.Router();
import jwt from 'jwt';

import { User } from '../../models';

router.post('/', async (req, res) => {
    const token = req.headers['x-access-token'];
    const { admin, authorized } = jwt.decode(token);

    if(!(admin && authorized)){
        return res.status(403).json({ success: false, error: 1 });
    }

    try{
        const user = await User.find({ _id: req.query.id });
        if(!user){
            return res.status(404).json({ success: false, error: 2 });
        }
        if(!authorized){
            return res.status(403).json({ success: false, error: 3 });
        }

        user.admin = true;
        await user.save();
        return res.status(204).json({ success: true });
    }catch(err){    
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
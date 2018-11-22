/*
    AUTHOR: wingtee
    CREATED: 20181122

    RESOURCE: /api/account/ban
    METHOD: DELETE
    DESCRIPTION: ban user
    
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
        await User.deleteOne({ _id: req.query.id });
        return res.status(204).json({ success: true });
    }catch(err){
        return res.status(500).json({ success: false, error: 0 });
    }
});

export default router;
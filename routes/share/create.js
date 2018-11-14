import express from 'express';
const router = express.Router();

import jwt from 'jsonwebtoken';
import { User } from '../../models';
import { key } from '../../models/user';

router.post('/', async (req, res) => {
    const { email, name, major, studentId, sex, admin } = req.body;
    try{

    }catch{

    }
});

export default router;
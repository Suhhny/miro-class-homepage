import express from 'express';
const router = express.Router();

import _class from './class';
router.use('/class', _class);

import share from './share';
router.use('/share', share);

import user from './user';
router.use('/user', user);

export default router;
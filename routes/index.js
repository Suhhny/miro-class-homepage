import express from 'express';
const router = express.Router();

import comment from './comment';
router.use('/comment', comment);

import log from './log';
router.use('/log', log);

import tag from './tag';
router.use('/tag', tag);

export default router;
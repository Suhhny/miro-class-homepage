import express from 'express';
const router = express.Router();

import alarm from './alarm';
router.use('/alarm', alarm);

import board from './board';
router.use('/board', board);

import comment from './comment';
router.use('/comment', comment);

export default router;
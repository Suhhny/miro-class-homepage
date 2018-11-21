import express from 'express';
const router = express.Router();

import _delete from './delete';
router.use('/delete', _delete);

import dislike from './dislike';
router.use('/dislike', dislike);

import like from './like';
router.use('/like', like);

import write from './write';
router.use('/write', write);

import list from './list';
router.use('/list', list);

export default router;
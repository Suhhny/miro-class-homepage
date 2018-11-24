import express from 'express';
const router = express.Router();

import dislike from './dislike';
router.use('/dislike', dislike);

import like from './like';
router.use('/like', like);

import list from './list';
router.use('/list', list);

import show from './show';
router.use('show', show);

import write from './write';
router.use('/write', write);

import _delete from './delete';
router.use('/delete', _delete);

export default router;
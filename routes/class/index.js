import express from 'express';
const router = express.Router();

import create from './create';
router.use('/create', create);

import _delete from './delete';
router.use('/delete', _delete);

import list from './list';
router.use('/list', list);

import show from './show';
router.use('/show', show);

export default router;
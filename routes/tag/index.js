import express from 'express';
const router = express.Router();

import add from './add';
router.use('/add', add);

import list from './list';
router.use('/list', list);

import _delete from './delete';
router.use('/delete', _delete);

export default router;
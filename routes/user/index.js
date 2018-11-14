import express from 'express';
const router = express.Router();

import create from './create';
router.use('/create', create);

import login from './login';
router.use('/login', login);

import logout from './logout';
router.use('/logout', logout);

import validate from './validate';
router.use('/validate', validate);

export default router;
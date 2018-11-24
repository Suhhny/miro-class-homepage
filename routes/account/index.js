import express from 'express';
const router = express.Router();

import adminize from './adminize';
router.use('/adminize', adminize);

import approve from './approve';
router.use('./approve', approve);

import ban from './ban';
router.use('/ban', ban);

import description from './description';
router.use('description', description);

import login from './login';
router.use('/login', login);

import photo from './photo';
router.use('/photo', photo);

import register from './register';
router.use('/register', register);

export default router;
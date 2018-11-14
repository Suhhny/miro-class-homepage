import express from 'express';
const app = express();
app.use(express.static(__dirname + '/../public'));

import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import path from 'path';

import mongoose from 'mongoose';
// mongoose.connect('', { useNewUrlParser: true });

import api from './routes';
app.use('/api', api);

app.all('*', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname + './../public/index.html'));
});

app.listen(3000);
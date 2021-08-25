const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to mongoDB.");
mongoose.set('useFindAndModify', false);

const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to mongoDB.");


const pagesRoutes = require('./routes/pages_routes');
app.use('/', pagesRoutes); //Homepage

app.listen(port, () => console.log(`server is running on http://localhost:${port}`));
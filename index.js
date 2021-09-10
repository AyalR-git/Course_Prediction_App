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
console.log('Connected to mongoDB.');

app.use('/static', express.static(path.join(__dirname, 'data')));
app.use('/staticRoutes', express.static(path.join(__dirname, 'routes')));

const pagesRoutes = require('staticRoutes/pages_routes');
app.use('/', pagesRoutes);

const dbRoutes = require('./routes/db_routes');
app.use('/db', dbRoutes);

app.listen(port, () => console.log(`server is running on http://localhost:${port}`));
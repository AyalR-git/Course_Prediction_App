const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/homepage', (req, res) =>
	res.sendFile(path.resolve('data/Pages/homepage.html')));

router.get('/prediction', (req, res) =>
	res.sendFile(path.resolve('data/Pages/prediction.html')));

router.get('/menu', (req, res) =>
	res.sendFile(path.resolve('data/Pages/menu.html')));

router.get('/contribute_grades', (req, res) =>
	res.sendFile(path.resolve('data/Pages/contribute_to_db.html')));

router.get('/terms_and_condition', (req, res) =>
	res.sendFile(path.resolve('data/Pages/terms_and_condition.html')));
    
router.get('/', (req, res) =>
	res.sendFile(path.resolve('data/Pages/homepage.html')));

module.exports = router;
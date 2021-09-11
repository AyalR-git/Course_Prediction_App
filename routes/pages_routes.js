const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/homepage', (req, res) =>
	res.sendFile(path.join(__dirname, '../data', 'pages', 'homepage.html')));

router.get('/prediction', (req, res) =>
	res.sendFile(path.resolve(__dirname, '../data', 'pages', 'prediction.html')));

router.get('/menu', (req, res) =>
	res.sendFile(path.resolve(__dirname, '../data', 'pages', 'menu.html')));

router.get('/contribute_grades', (req, res) =>
	res.sendFile(path.resolve(__dirname, '../data', 'pages', 'contribute_to_db.html')));

router.get('/terms_and_condition', (req, res) =>
	res.sendFile(path.resolve(__dirname, '../data', 'pages', 'terms_and_condition.html')));
    
router.get('/', (req, res) =>
	res.sendFile(path.join(__dirname, '../data', 'pages', 'homepage.html')));

module.exports = router;
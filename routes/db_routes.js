const express = require('express');
const router = express.Router();
const path = require('path');
const MarksModel = require('../models/marksModel');

router.get('/', async(req, res) => {
    const mark = await MarksModel.find();
    res.send(mark);
});

router.get('/:markId', async(req, res) => {
    const { markId } = req.params;

    if (!markId) {
        return res.sendStatus(400); // bad request
    }
    
    const mark = await MarksModel.findById(markId);
    if (!mark) {
        return res.sendStatus(404); // not found
    }
    res.send(mark);
});

router.post('/', async(req, res) => {
    const fields = req.body;
    try {
        const mark = await MarksModel.create(fields);
        res.send(mark);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

router.delete('/:markId', async(req, res) => {
    const markId = req.params.markId;

    if (!markId) {
        return res.sendStatus(400); // bad request
    }

    await MarksModel.findByIdAndDelete(markId);

    res.sendStatus(200);
});

router.put('/:markId', async(req, res) => {
    const { markId } = req.params;
    if (!markId) {
        return res.sendStatus(400); // bad request
    }
    const fields = req.body;
    try {
        const mark = await MarksModel.findByIdAndUpdate(markId, fields, { new: true });
        res.send(mark);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});


module.exports = router;
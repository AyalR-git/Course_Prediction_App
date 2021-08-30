const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    ID: { type: Number, required: true },
    name: { type: String, required: false, default: 'UnKnown' },
    Algebra: { type: Number, min: 0, max: 100, required: true},
    Infinite: { type: Number, min: 0, max: 100, required: true},
    Discrete: { type: Number, min: 0, max: 100, required: true},
    Python: { type: Number, min: 0, max: 100, required: true},
    Final: { type: Number, min: 0, max: 100, required: true}
});

module.exports = mongoose.model('MarksSchema', MarksSchema);

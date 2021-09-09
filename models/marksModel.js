const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
	ID: { type: Number},
	name: { type: String, default: 'UnKnown' },
	Algebra: { type: Number, min: 0, max: 100},
	Infinite: { type: Number, min: 0, max: 100},
	Discrete: { type: Number, min: 0, max: 100},
	Python: { type: Number, min: 0, max: 100},
	Final: { type: Number, min: 0, max: 100}
});

module.exports = mongoose.model('MarksSchema', MarksSchema);

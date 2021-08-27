const mongoose = require('mongoose');

const MarksSchema = new mongoose.Schema({
    idNumber: { type: String, required: true },
	name: { type: String, required: true },
	mark: { type: Number, min: 0, max: 100}
});

module.exports = mongoose.model('MarksSchema', MarksSchema);
const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    totalCredits: { type: Number, default: 0 },
});

module.exports = mongoose.model('Credit', creditSchema);

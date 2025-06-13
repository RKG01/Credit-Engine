const Credit = require('../models/credit');

exports.getCredits = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await Credit.findOne({ userId });
        const totalCredits = user ? user.totalCredits : 0;

        res.json({ userId, totalCredits });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

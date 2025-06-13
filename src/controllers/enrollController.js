const Credit = require('../models/credit');

exports.handleEnroll = async (req, res) => {
    const { userId, activityType } = req.body;

    if (!userId || !activityType) {
        return res.status(400).json({ error: 'userId and activityType required' });
    }

    const creditValue = 20; // can make dynamic based on activityType

    try {
        let user = await Credit.findOne({ userId });
        if (!user) {
            user = new Credit({ userId, totalCredits: creditValue });
        } else {
            user.totalCredits += creditValue;
        }

        await user.save();

        res.json({ creditsAwarded: creditValue, totalCredits: user.totalCredits });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

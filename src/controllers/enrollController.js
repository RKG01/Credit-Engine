const Credit = require('../models/credit');

const activityCredits = {
  referral: 30,
  post: 15,
  tech_module: 25,
  spend: 50,
  coffee_wall: 10,
};

exports.handleEnroll = async (req, res) => {
  const { userId, activityType } = req.body;

  if (!userId || !activityType) {
    return res.status(400).json({ error: 'userId and activityType are required' });
  }

  const creditValue = activityCredits[activityType];

  if (!creditValue) {
    return res.status(400).json({ error: 'Invalid activityType provided' });
  }

  try {
    let user = await Credit.findOne({ userId });

    if (!user) {
      user = new Credit({
        userId,
        totalCredits: creditValue,
      });
    } else {
      user.totalCredits += creditValue;
    }

    await user.save();

    return res.status(200).json({
      message: 'Credits awarded successfully',
      creditsAwarded: creditValue,
      totalCredits: user.totalCredits,
    });
  } catch (err) {
    console.error('Error in handleEnroll:', err);
    return res.status(500).json({ error: 'Server error' });
  }
};

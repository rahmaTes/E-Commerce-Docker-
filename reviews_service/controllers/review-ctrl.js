const Review = require('../models/review-model');

getReviews = async (req, res) => {
    await Review.find({}, (err, reviews) => {
        if (err) {
            return res.status(400).json({ success: false, error: err });
        }
        
        return res.status(200).json({ success: true, data: reviews });
    }).catch(err => console.log(err));
}

checkServiceRunning = (req, res) => {
    res.send('Hello World! - from Review service');
}

module.exports = {
    getReviews,
    checkServiceRunning
}
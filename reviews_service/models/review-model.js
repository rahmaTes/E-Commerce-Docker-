const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
    {
        review: { type: String, required: true },
        rate: { type: String, required: true },
        Day: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review)
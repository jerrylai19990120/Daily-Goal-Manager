/* Goal mongoose model */

const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		minlegth: 1
	},
	description: {
		type: String,
		required: true,
		minlegth: 1
	},
	duration: {
		type: Number,
		required: true
	}
})

const Goal = mongoose.model('Goal', GoalSchema)

module.exports = { Goal }
/* Goal mongoose model */

const mongoose = require('mongoose')

const Goal = mongoose.model('Goal', {
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

module.exports = { Goal }
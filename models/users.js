/* User mongoose model */

const mongoose = require('mongoose')

const User = mongoose.model('User', {
	username: {
		type: String,
		required: true,
		minlegth: 1
	},
	email: {
		type: String,
		required: true,
		minlegth: 1
	},
	goals: {
		type: Array,
		required: true
	},
	friends: {
		type: Array,
		required: true
	}
})

module.exports = { User }
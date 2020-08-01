/* User mongoose model */

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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

const FriendSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	}
})

const UserSchema = new mongoose.Schema({
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
		type: [GoalSchema],
		required: true
	},
	friends: {
		type: [FriendSchema],
		required: true
	}
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }
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
	duplicateUsername: {
		type: Boolean
	},
    validUsername: {
		type: Boolean
	},
	username: {
		type: String,
		required: true,
		minlegth: 3
	},
	email: {
		type: String,
		required: true,
		minlegth: 3
	},
	password: {
		type: String,
		required: true,
		minlength: 8
	},
	goals: {
		type: [GoalSchema]
	},
	friends: {
		type: [FriendSchema]
	}
})

const User = mongoose.model('User', UserSchema)

module.exports = { User }
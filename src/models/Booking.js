const mongoose = require('mongoose')

const BookingSchema = new mongoose.Schema({
	date:{
		type:Date,
	},
	approved:{
		type:Boolean
	},
	user:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'User'
	},
	spot:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'Spot'
	}

})

module.exports = mongoose.model('Booking',BookingSchema)
var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var doctorSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName :{
        type: String,
        required: true
    },
    age: {
        type:  Number,
        required: true
    },
    gender :{
        type: String,
        required: true
    },
    type :{
        type: String,
        required: true
    },
    rating :{
        type: Number,
        required: true
    }
});

var model = mongoose.model('Doctors', doctorSchema);
//var model = mongoose.model('Users', doctorSchema);

/*var Schema = mongoose.Schema;

var UsersSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type:  Number,
		required: true
	}
});

var model = mongoose.model('Users', UsersSchema);*/



module.exports = model;
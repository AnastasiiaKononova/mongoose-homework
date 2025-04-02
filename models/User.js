const {Schema, model} = require('mongoose');

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Wrong format email",
          ]
    },
    favouriteDishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    }]
});

const User = model('User', userSchema);

module.exports = User;
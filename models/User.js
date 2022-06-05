const mongoose = require("mongoose")
// const validator = require('validator')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required']
        },
        email: {
            type: String,
            trim: true,
            required: [true, 'email is required'],
            unique: true,
            validate: {
                validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
                message: '{VALUE} is not a valid email!'
            }
        },
        password: {
            type: String,
            required: [true, 'password is required']
        },
    },
    { timestamps: true }
)


module.exports = mongoose.model("User", UserSchema)
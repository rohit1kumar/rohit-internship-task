const mongoose = require("mongoose")


const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'name is required'],
        },
        number: {
            type: Number,
            trim: true,
            unique: true,
            required: [true, 'contact number is required'],
            validate: {
                validator: (v) => /^[0-9]{10}/.test(v),
                message: '{VALUE} is not a valid 10 digit number ! Enter 10 digits'
            }
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("Contact", ContactSchema)



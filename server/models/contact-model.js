const {Schema , model} = require("mongoose")

const ContactSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    }

} , {
    timestamps: true
}
)

// create a model
const Contact = new model("Contact", ContactSchema)
// export the model
module.exports = Contact




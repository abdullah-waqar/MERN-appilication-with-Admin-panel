const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    phone: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//! json web token

userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId: this._id.toString(), //? Payloads 
            email: this.email,
            isAdmin: this.isAdmin
        } , 
        process.env.JWT_SECRET, //? Secret key from environment variables, Signature
        {
            expiresIn: "7d" //? Token will expire in 7 days
        }
    )
    }
    catch(error)
    {
        console.error("Error generating token:", error);
        throw error;
    }
}

userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    }
    catch (error) {
        console.error("Error comparing password:", error);
        throw error;
    }
}

//? Square the password before saving the user
userSchema.pre('save', async function (next) {
    user = this
    
    if(!user.isModified('password')){
        next()
    }

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    }
    catch(error)
    {
        console.error("Error hashing password:", error);
        next(error);
    }
})


const User = mongoose.model('User', userSchema);
module.exports = User;
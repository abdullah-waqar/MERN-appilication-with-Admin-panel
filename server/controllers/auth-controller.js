const User = require('../models/user-model')
const bcrypt = require('bcryptjs');

const home = async (req , res) =>{
    try {
        res.status(200).json({
            message: "Welcome to the authentication API"
        })
    }
    catch (error) 
    {
        console.error("Error in home controller:", error);
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body)
        
        const {name , email , password} = await req.body;

        if(await User.findOne({email:email}))
        {
            return res.status(400).json({ error: "Email already exists" });
        }


       
        const userCreated = await User.create({
            name,
            email,
            password
        });
        
        res.status(200).json({
            userCreated , token: await userCreated.generateToken() , userId: userCreated._id.toString()
        });
    } catch (error) {
        console.error("Error in register controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email})

        if(!user)
        {
            return res.status(400).json({error: "Invalid email or password"})
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        return res.status(200).json({
            msg: "Login successfull",
            token: await user.generateToken(), 
            userId: user._id.toString()
        });


    }
    catch (error) {
        console.error("Error in register controller:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    home , register , login
}
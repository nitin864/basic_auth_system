const { default: mongoose } = require('mongoose');
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    try {
        const user = await userModel.create({
            username, email, password
        })

         

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)
        
        res.cookie("token", token)
        res.status(201).json({
            message: "user created successfully",
            user: user,
             
        })
    } catch (error) {
        console.log(error)
    }


}

async function loginUser(req,res){

}

module.exports = { registerUser, loginUser }
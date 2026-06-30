const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function createPost(req, res) {
    try {
        const token = req.cookies.token;
        console.log(token)

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(verify.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        console.log(user);

        res.status(201).json({
            message: "User verified and post created successfully"
        });

    } catch (err) {
        console.log(err);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

module.exports = { createPost };
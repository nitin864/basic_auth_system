const express = require('express');
const authRoutes = require('./routes/auth.routes')
const cookiePasrse = require('cookie-parser')
const postroutes = require('./routes/post.routes')

const app = express();

app.use(express.json());;
app.use(cookiePasrse());

app.use("/api/auth/", authRoutes)
app.use("/api/post/", postroutes)

module.exports = app
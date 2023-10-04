const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const connect = require ("./connect.js")
 
// const PORT = 4040;

dotenv.config();
// mongoose.connect(process.env.MONGO_URL)
connect()
const jwtSecret = process.env.JWT_SECRET

const app = express();
app.use(express.json());
app.use(cors ({
    credentials: true,
    origin: process.env.CLIENT_URL,
}))

app.get('/test', (req, res) => {
    res.json('test ok')
});

app.post('/register', async(req, res) => {
    const {username, password} = req.body;
    try {
        const createUser = await User.create({
            username,
            password
        });
        jwt.sign({userId:createUser._id}, jwtSecret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json('ok')
        });
   

    } catch(err) {
        if (err) throw err;
        res.status(500).json('error');

    }
});

// app.listen(PORT, () => {
//     console.log("Server listening on Port", PORT);
// })
app.listen(4040)
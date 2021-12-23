const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model("User")
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys.js');
const requireLogin = require('../middleware/requireLogin')

router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!email || !password || !name) {
            let result = { err: "Please add all the fields" }
            console.log((result))
            return res.status(422).json(result)
        }
        let savedUser = await User.findOne({ email: email })
        if (savedUser) {
            let result = { err: "User Already Exists" }
            console.log((result))
            return res.status(422).json(result)
        }
        let hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            name,
            email,
            password: hashedPassword
        })
        let result = await user.save()
        if (result) {
            return res.status(422).json({ message: "User saved Succesfully" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            let result = { err: "Please add all the fields" }
            console.log((result))
            return res.status(422).json(result)
        }
        let savedUser = await User.findOne({ email: email })
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or Password" })
        }
        let doMatch = bcrypt.compare(password, savedUser.password)
        if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            const { _id, name, email } = savedUser;
            return res.json({ token, user: { _id, name, email } })
        } else {
            res.status(422).json({ error: "Invalid Email ID or Password" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

module.exports = router;

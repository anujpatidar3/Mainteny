const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Student = mongoose.model("Student")

router.post('/createstudent', requireLogin, async (req, res) => {
    try {
        const { studentName,
            rollNumber,
            DBMS,
            dataStructure,
            algorithms,
            maths,
            OOPS,
            AI,
            ML } = req.body;
        if (!studentName || !rollNumber) {
            return res.status(422).json({ error: "Please add all the fields" })
        }

        req.user.password = undefined;
        const student = new Student({
            studentName,
            rollNumber,
            DBMS,
            dataStructure,
            algorithms,
            maths,
            OOPS,
            AI,
            ML,
            postedBy: req.user
        })
        let result = await student.save();
        res.json(result)
    }
    catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

router.get('/mystudents', requireLogin, async (req, res) => {
    try {
        let temp = await Student.find({ postedBy: req.user._id })
        //     .populate("postedBy", "_id name")
        res.json(temp)
    } catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

module.exports = router;
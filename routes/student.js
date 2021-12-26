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

router.get('/mystudents/:studentid', requireLogin, async (req, res) => {
    try {
        let result = await Student.findOne({ _id: req.params.studentid })
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

router.put('/updatestudent', requireLogin, async (req, res) => {
    try {
        Student.findByIdAndUpdate(req.body.studentid,
            req.body,
            { new: true },
            (err, result) => {
                if (err) {
                    return res.status(422).json({ err: "DATA CANNOT BE UPDATED" })
                }
                res.json(result)
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json("Error")
    }
})

module.exports = router;

            // { $set: { studentName: req.body.studentName } },
            // { $set: { rollNumber: req.body.rollNumber } },
            // { $set: { DBMS: req.body.DBMS } },
            // { $set: { dataStructure: req.body.dataStructure } },
            // { $set: { algorithms: req.body.algorithms } },
            // { $set: { maths: req.body.maths } },
            // { $set: { OOPS: req.body.OOPS } },
            // { $set: { AI: req.body.AI } },
            // { $set: { ML: req.body.ML } },

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    rollNumber:{
      type:String,
      required:true
    },
    DBMS: {
        type: Boolean,
        default: false,
    },
    dataStructure: {
        type: Boolean,
        default: false,
    },
    algorithms: {
        type: Boolean,
        default: false,
    },
    maths: {
        type: Boolean,
        default: false,
    },
    OOPS: {
        type: Boolean,
        default: false,
    },
    AI: {
        type: Boolean,
        default: false,
    },
    ML: {
        type: Boolean,
        default: false,
    },
    // subjects: [{
    //     type: String,
    // }],
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})

mongoose.model("Student",studentSchema);
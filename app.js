const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./config/keys')


require('./models/user')
require('./models/student')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/student'))

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB")
})
mongoose.connection.on('error', (err) => {
    console.log("Error connecting to MongoDB ",err)
})

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT ", PORT)
})
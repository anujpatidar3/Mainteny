const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT =process.env.PORT || 5000 
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

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
  }

app.listen(PORT, () => {
    console.log("SERVER IS RUNNING ON PORT ", PORT)
})
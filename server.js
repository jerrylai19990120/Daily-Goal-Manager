
const express = require('express')
const app = express()

const {mongoose} = require('./db/mongoose')
mongoose.set('useFindAndModify', false)

const User = require('./models/users')

const ObjectID = require('mongodb')
const bodyParser = require('body-parser')

app.use(bodyParser.json());

const session = require('express-session')

app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        }
    })
)

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

app.use(express.static(__dirname+'client/build'))

app.get("*", (req, res)=>{
    res.sendFile(__dirname + '/client/build/index.html')
})




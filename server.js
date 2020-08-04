
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());

const {mongoose} = require('./db/mongoose')
mongoose.set('useFindAndModify', false)

const {User} = require('./models/users')

const {ObjectID}= require('mongodb')


const session = require('express-session')

function isMongoError(error){
	return error === 'object' && error !== null && error.name === "MongoNetworkError";
}

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

app.get('/loginAuth', (req, res) => {

    User.find().then((users)=>{
        if(!users){
            res.status(404)
        }else{
            res.send(users)
        }
        
    }).catch((error)=>{
        console.log(error)
        res.status(500).send("Internal server error.")
    })
})

app.post('/signup', (req, res)=>{

    /*if(mongoose.connection.readyState != 1){
		console.log("mongoose connection error");
		res.status(500).send("Internal server error");
		return;
	}*/

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    
    user.save().then((result)=>{
        res.send(result)
    }).catch((error)=>{
        if(isMongoError(error)){
            res.status(500).send("Internal server error")
        }else{
            res.status(404).send("404 not found")
        }
    })
})

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

app.use(express.static(__dirname+'/client/build'))

app.get("*", (req, res)=>{
    res.sendFile(__dirname + '/client/build/index.html')
})






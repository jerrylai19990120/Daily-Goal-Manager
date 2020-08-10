
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());


const {mongoose} = require('./db/mongoose')
mongoose.set('useFindAndModify', false)

const bcrypt = require('bcryptjs')

const {User} = require('./models/users')
const {Goal} = require('./models/goals')

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

    if(mongoose.connection.readyState != 1){
		console.log("mongoose connection error");
		res.status(500).send("Internal server error");
		return;
	}

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash){
            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            req.session.username = req.body.username;
            req.session.email = req.body.email;
            
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
    })
    
})


app.get('/check-session', (req, res)=>{
    if(req.session.username){
        res.send({currentUser: req.session.email})
    }else{
        res.status(401).send()
    }
})

//Route to log out and destroy the cookie
app.get('/logout', (req, res)=>{
    req.session.destroy(error => {
        if(error){
            res.status(500).send(error)
        }else{
            res.send()
        }
    })
})

/*** API Routes below ************************************/

/** Goal resource routes **/
// a POST route to *create* a goal
app.post("/goals", (req, res) => {

    // Create a new student using the Goal mongoose model
    const goal = new Goal({
        title: req.body.title,
        description: req.body.description,
        duration: req.body.duration
    });

    // Save goal to the database
    goal.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

// a GET route to get all students
app.get("/goals", (req, res) => {
    Goal.find().then(
        goals => {
            res.send({ goals }); 
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
});

/*** API Routes ************************************/

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

app.use(express.static(__dirname+'/client/build'))

app.get("*", (req, res)=>{
    res.sendFile(__dirname + '/client/build/index.html')
})






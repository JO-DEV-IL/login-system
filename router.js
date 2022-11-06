//All routes for login system

//Dependencies
const express = require('express')
const router = express.Router()



//Admin login
const admin = {
    email: 'admin@gmail.com',
    password: 'admin123'
}

//User login
//If user matches admin credentials, redirect to dashboard
//Else end the response and print error
router.post('/login', (req, res) => {
    if(req.body.email === admin.email && req.body.password === admin.password){
        req.session.user = req.body.email
        // res.redirect('/dashboard')
        res.end('Login successful')
    }else{
        res.end('Invalid username')
    }
})


//Export the router
module.exports = router
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
//User's email becomes the displayed Username
//Else, end the response and print error
router.post('/login', (req, res) => {
    if(req.body.email == admin.email && req.body.password == admin.password){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
    }else{
        res.end('Invalid credentials :(')
    }
})

//Dashboard router
//If there is information for the user, render dashboard
//Else, print error
router.get('/dashboard', (req, res) => {
    if(req.session.user){
        res.render(('dashboard'), { user: req.session.user })
    }else{
        res.send('Unauthorized User :(')
    }
})

//Logout
//Destroy the session variable of the logged in user
router.get('/logout', (req, res) => {
    req.session.destroy(function(err){
        if(err){
            res.send('Error')
        }else{
            res.render('base', { title: 'Login System', logout: 'Logout successful' })
        }
    })
})

//Register link
router.get('/register', (req, res) => {
    res.render('register')
})


//Export the router
module.exports = router
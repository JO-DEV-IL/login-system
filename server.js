//DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require('body-parser')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')

//Set ejs engine
app.set('view engine', 'ejs')

//Setup body-parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

//Setup express session
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

//Home router
app.get('/', (req, res) => {
    res.render('base', { title: 'Login System' })
})

//Login successful router
app.get('/success', (req, res) => {
    res.render('success', { title: 'Login Successful!' })
})

//Listen for server connection @ port variable
app.listen(port, () => {
    console.log('Connected to server!')
})
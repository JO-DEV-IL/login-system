//DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyparser = require('body-parser')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')
const router = require('./router.js')

//Setup ejs engine
app.set('view engine', 'ejs')

//Setup body-parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

//Setup express session
//Will generate an unique id for every session and keep it private
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

//Setup router middleware
app.use('/route', router)

//Home router
app.get('/', (req, res) => {
    res.render('base', { title: 'Login System' })
})

//Listen for server connection @ port variable
app.listen(port, () => {
    console.log('Connected to server!')
})
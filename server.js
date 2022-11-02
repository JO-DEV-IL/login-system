//DEPENDENCIES
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//Set ejs engine
app.set('view engine', 'ejs')

//Home router
app.get('/', (req, res) => {
    //Render the response
    //title from base.ejs
    res.render('base', { title: 'Login System' })
})

//Listen for server connection @ port variable
app.listen(port, () => {
    console.log('Connected to server!')
})
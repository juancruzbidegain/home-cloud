const express = require('express')
const fileUpload = require('express-fileupload')

const $PORT = 5000

const app = express()

app.get('/', (req,res) => {
    res.send(`Server running from ${$PORT}`)
})

app.listen($PORT)
let express = require('express')
let cors = require('cors')
let dateFormat = require('dateformat')
let bodyParser = require('body-parser')

let app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
    res.status(200).send({"msg":"Found Home"})
})

app.get('/hello', async (req, res) => {
    res.status(200).send({"msg":"Hello World"})
})
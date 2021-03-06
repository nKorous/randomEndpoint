let express = require('express')
let cors = require('cors')
let dateFormat = require('dateformat')
let bodyParser = require('body-parser')

let { Client, Pool } = require('pg')
const pool = new Pool()

let app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

app.get('/', async (req, res) => {
    res.status(200).send({"msg":"Found Home"})
})

app.get('/hello', async (req, res) => {
    res.status(200).send({"msg":"Hello World"})
})

app.get('/testDB', async (req, res) => {

    let info = await pool.query('select * from users')

    res.status(200).send({msg: "Hit Test DB", info: info})
})

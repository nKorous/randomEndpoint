let express = require('express')
let cors = require('cors')
let dateFormat = require('dateformat')
let bodyParser = require('body-parser')

let { Client } = require('pg')

let app = express()

const dbConn = 'postgres://jgjdfpyyfskizn:7cd369dbe45bb4929f4865a726382b049e0e77b057d58e99f76e5acc0dc46073@ec2-54-83-33-213.compute-1.amazonaws.com:5432/d91ts6v2ujvbdh'
const client = new Client({
    connectionString: dbConn
})
client.connect()

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
   let data = await client.query(`select * from users`, (err, res) => {
        if(err){
            return err
        } else {
            return res
        }
    })

    return data
})
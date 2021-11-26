require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001
var axios = require('axios').default;
const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.get('/tickets', async function (req, res) {

    var token = Buffer.from(process.env.NAME + ':' + process.env.PASS).toString('base64');
    //console.log(tokenString);
    axios.get(process.env.API_PATH, {
        headers: {
            Authorization: `Basic ${token}`
        }
    }).then((result) => {
        // console.log(result.data)
        res.status(200).send(result.data)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
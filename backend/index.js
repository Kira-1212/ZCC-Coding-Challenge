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
    var path = process.env.API_PATH + '/api/v2/tickets';
    axios.get(path, {
        headers: {
            Authorization: `Basic ${token}`
        }
    }).then((result) => {
        res.status(200).send(result.data)
    }).catch((error) => {
        res.send(error)
    })
})


// app.get('/tickets1/:nextdata',function(req,res,next)
// {
//     var token = Buffer.from(process.env.NAME + ':' + process.env.PASS).toString('base64');

//     axios.get(process.env.API_PATH+`&page[after]=${req.params.nextdata}`, {
//         headers: {
//             Authorization: `Basic ${token}`
//         }
//     }).then((result) => {



//         res.status(200).send(result.data)


//     }).catch((error) => {

//         res.status(500).send(error)
//     })


// }
// )


// app.get('/tickets2/:previousdata',function(req,res,next)
// {
//     var token = Buffer.from(process.env.NAME + ':' + process.env.PASS).toString('base64');

//     axios.get(process.env.API_PATH+`&page[before]=${req.params.previousdata}`, {
//         headers: {
//             Authorization: `Basic ${token}`
//         }
//     }).then((result) => {


//         res.status(200).send(result.data)


//     }).catch((error) => {

//         res.status(500).send(error)
//     })


// }
// )


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;

const express = require('express')
const app = express()
app.use(express.json());
const port = 3000


const attentionData = []


app.get('/data/get', (req, res) => {

//res.send(attentionData[0])
    console.log('Data requested')
})

app.post('/data/post', (req, res) =>
{

    //const parsedData = JSON.parse(req.body);
    //console.log("Received data: " + parsedData);
    console.log("Received data: ", req.body);
    attentionData.push(req.body);
    res.status(200).json({ message: 'Data received' });
})

app.listen(port, () => {
    console.log('Server listens on http://localhost:3000')
})
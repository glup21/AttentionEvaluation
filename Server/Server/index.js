const express = require('express')
const cors = require('cors')
const WebSocket = require('ws')

const app = express()
const WsServer = new WebSocket.Server({port : '8080'})
app.use(cors())
app.use(express.json());
const port = 3000


const attentionData = []


app.get('/data', (req, res) => {

//res.send(attentionData[0])
    console.log('Data requested')
    res.status(200).json({ message: 'Data received' });
})

app.post('/data', (req, res) =>
{

    //const parsedData = JSON.parse(req.body);
    //console.log("Received data: " + parsedData);
    console.log("Received data: ", req.body);
    attentionData.push(req.body);
    res.status(200).json({ message: 'Data received' });

    WsServer.clients.forEach((client) => {

        if(client.readyState === WebSocket.OPEN)
        {
            client.send(JSON.stringify(req.body))
            console.log('Sent to the browser app.')
        }

    });
})

app.listen(port, () => {
    console.log('Server listens on http://localhost:3000')
})


WsServer.on('connection', socket => {
    console.log('WebSocket listenes on http://localhost:8080')
    // socket.on('message', message =>
    // {

    // }
    //)

})

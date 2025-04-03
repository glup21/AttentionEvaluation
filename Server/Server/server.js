const express = require('express')
const app = express()

app.get("/api", (req, res) =>{

    res.json({"users" : ["UserOne"]})
});

app.listen(5000, () => {'Server is listening on http://localhost:5000'})
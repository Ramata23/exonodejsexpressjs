//etape 1
const express = require('express')
const app = express()
const port= 3000;

app.get('/', function(req, res){
    res.status(200).send('Simple Text')

})

//etape2
app.get('/teachersName', function(req, res){
    res.status(200).send({thomas: "Thomas Jamais", alban : "Alban Meurice"})
})

app.listen(port, function () {
    console.log("Server is running on "+ port +" port");
});

//etape4

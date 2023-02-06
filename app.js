const express = require('express');
const port = 5050;
const morgan = require('morgan');
const path = require('path');
const bodyParser  =require('body-parser')


const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/get', (req, res) => {
    res.json({
        status: 200,
        message: 'You are on the get route'
    })
})

app.get('/test', (req, res) => {
    res.json({
        status: 200,
        message: 'You are on the test routes'
    })
})
app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
})


app.listen(port, () => {
    console.log(`server is runnning at port ${port}`);
})
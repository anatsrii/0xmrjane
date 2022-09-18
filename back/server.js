const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.BACKEND_PORT;
console.log(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', (req, res) => (res.status(200).json({Message: "Hello from backend"})));

app.listen(port, ()=> console.log(`Server start on port ${port}`));
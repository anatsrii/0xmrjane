const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/test', (req, res)=> {
  console.log(res.json({Message: "Hello From backen"}));
});

app.listen(port, ()=> console.log(`Server running on ${port}`));
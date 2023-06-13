const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.static(__dirname + '/dist/frontend'));
app.get('/*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/frontend','index.html'));
})
app.listen(process.env.PORT || 5000);
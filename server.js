const express = require('express');
const path = require('path');

const expressApp = express();

expressApp.use(express.static(path.join(__dirname, 'build')));

expressApp.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3006;

expressApp.listen(port, function () {
    console.log('server started '+ port);
});

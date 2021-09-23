// Serve only the static files form the dist directory
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/build'));
app.get('/*', function (req, res) {  
res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
res.sendFile(path.join(__dirname + '/build/index.html'));
});
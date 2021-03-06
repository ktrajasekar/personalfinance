const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Get our API routes
const api = require('./api');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));


app.use('/api', api);



const port = process.env.PORT || '3000';
app.set('port', port);


const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
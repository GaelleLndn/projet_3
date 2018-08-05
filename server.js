const http = require('http');
const app = require('./backend/app');

const port = process.env.port || 8000;

const server = http.createServer(app);

server.listen(port);
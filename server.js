const http = require('http');
const { deployPort } = require('./config');
const app = require('./app/app');

const HTTP_ERROR = 'error';
const HTTP_LISTENING = 'listening';

const httpServer = http.createServer(app);
app.set('port', deployPort);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = (typeof deployPort === 'string')
    ? `Pipe ${deployPort}` : `Port ${deployPort}`;
  switch (error.code) {
    case 'EACCES':
      console.log(`${bind} Requiere privilegios mas elevados que los del usuario`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log(`${bind} ya esta en uso`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = httpServer.address();
  const bind = (typeof addr === 'string')
    ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

async function serviceStart() {
  httpServer.listen(deployPort);
  httpServer.on(HTTP_ERROR, onError);
  httpServer.on(HTTP_LISTENING, onListening);
}

serviceStart();
const App = require('./application');
const config = require('./config');

const app = new App(config);

app.server.start(app.appEmitter);

module.exports = app;
require('./app/auth/routes');

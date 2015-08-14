var webpack = require('webpack'),
    Server  = require('webpack-dev-server'),
    config  = require('./config.js'),
    host    = require('./host.js');

console.log(__dirname);

new Server(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    color: true
  }
}).listen(host.port, host.host, function(err) {

  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + host.full);
});
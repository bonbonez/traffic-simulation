var webpack = require('webpack'),
    config  = require('./config.js');

webpack(config).run(function(err, stats){
  if (err) {
    console.log(err);
  } else {
    console.log(stats.toString({ colors: true }));
  }
});
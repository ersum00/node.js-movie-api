const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://eren:2941907eren.@ds139167.mlab.com:39167/heroku_hbx7vm0c', { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
      console.log('MongoDb: Connected');
  });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDb: Error',err);
    });
    mongoose.Promise = global.Promise;
};


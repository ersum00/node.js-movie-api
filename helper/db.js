const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://eren:<123456aq>@node-qtkqv.mongodb.net/test?retryWrites=true&w=majority');
    mongoose.connection.on('open', () => {
      console.log('MongoDb: Connected');
  });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDb: Error',err);
    });
};
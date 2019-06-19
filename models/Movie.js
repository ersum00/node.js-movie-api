const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id:Schema.Types.ObjectId,
    category:String,
    titles:{
        type: String,
        required:true
    },
     sehir:String,
    years:Number,
    imdb_score:Number,
    zaman:{
        type:Date,
        default:Date.now
    }
});
module.exports =mongoose.model('movie',MovieSchema);

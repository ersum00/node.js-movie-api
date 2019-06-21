const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id:Schema.Types.ObjectId,
    category:String,
    titles:{
        type: String,
        required: [true, '{PATH} alanı zorunludur'],
        maxlength: [15, '{PATH}  15 ile 4 karakter uzunluğu arasında olmalıdır -{MAXLENGTH}'],
        minlength:[4, '{PATH}  15 ile 4 karakter uzunluğu arasında olmalıdır =>>{VALUE} metni geçersiz uzunluktadır -{MINLENGTH}']
    },
     sehir:String,
    years:{
        type:Number,
        max:2050,
        min:1999
    },
    imdb_score:{
        type:Number,
        max:10,
        min:1
    },
    zaman:{
        type:Date,
        default:Date.now
    }
});
module.exports =mongoose.model('movie',MovieSchema);

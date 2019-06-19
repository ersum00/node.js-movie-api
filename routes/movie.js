const express = require('express');
const router = express.Router();
//Models
const Movie = require('../models/Movie');
router.post('/', (req, res, next) => {
  /*const {titles ,imdb_score ,years ,sehir , zaman , category} = req.body;*/

  const movie=new Movie(req.body);

  /*const movie=new Movie({
  titles:titles,
  imdb_score:Imdb_score,
  years:years,
  sehir:sehir,
  zaman:zaman,
  category:category
});*/
/*movie.save((err,data) => {
  if (err)
    res.json(err);
  res.send(data);
})*/
const promise=movie.save();
promise.then((data) => {
res.json({status:1});
}).catch((err) => {
  res.json(err);
})
});

module.exports = router;

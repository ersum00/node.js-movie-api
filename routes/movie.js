const express = require('express');
const router = express.Router();
//Models
const Movie = require('../models/Movie');
router.get('/',(req,res) => {
  const promise = Movie.find({});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    if(err)
      res.json(err);
  });
});
// Top10 Film listesi
router.get('/top10',(req,res) => {
  const promise = Movie.find({}).limit(10).sort({imdb_score: -1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    if(err)
      res.json(err);
  });
});
router.get('/:movie_id', (req,res,next) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((movie) => {
    if (!movie) {
      next({ message: 'The movie was not found', code: 99});
    }
    res.json(movie);
  }).catch((err)=> {
    if (err)
      res.json(err);
  });
});
router.delete('/:movie_id', (req,res,next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);
  promise.then((movie) => {
    if (!movie) {
      next({ message: 'The movie was not found', code: 99});
    }
    res.send('Silme İŞLEMİ TAMAM !');
  }).catch((err)=> {
    if (err)
      res.json(err);
  });
});
router.put('/:movie_id', (req,res,next) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id,req.body,{new:true});
  promise.then((movie) => {
    if (!movie) {
      next({ message: 'The movie was not found', code: 99});
    }
    res.json(movie);
  }).catch((err)=> {
    if (err)
      res.json(err);
  });
});
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
  res.json(data);
}).catch((err) => {
  res.json(err);
})
});
//between years
router.get('/between/:start_year/:end_year',(req,res) => {
  const {start_year,end_year}=req.params;
  const promise = Movie.find(
      {
  years : { "$gte": parseInt(start_year), "$lte": parseInt(end_year)}
      }
      );
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    if(err)
      res.json(err);
  });
});

module.exports = router;

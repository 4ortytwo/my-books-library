const express       = require('express');
const router        = express.Router();
const Book          = require('../models/book');

router.post('/add', (req, res, next) => {
    const { user, comments } = req.body;
    Book.update({ _id: req.query.book_id }, { $push: { reviews: { user, comments }}})
    .then(book => {
        debugger
      res.redirect('/books')
    })
    .catch((error) => {
      console.log(error)
    })
  });

  module.exports      = router;
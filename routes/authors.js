const express       = require('express');
const router        = express.Router();
const Author        = require('../models/author');

// display all books
router.get('/', (req, res, next)=> {
    Author.find({}, (err, queryResults)=> {
        err ? res.status(500).send(err) : res.render('authors', {authors: queryResults});
    });
});


module.exports = router;

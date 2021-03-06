const express       = require('express');
const router        = express.Router();
const mongoose      = require('mongoose');
const Book          = require('../models/book');
const Author        = require('../models/author')

// display all books
router.get('/', (req, res, next)=> {
    Book.find({}).populate('author', Author).then(queryResults=> {
        res.render('books', {books: queryResults});
    }).catch(err => {
        res.status(500).send(err)
    })
});

// router.get('/', (req, res, next)=> {
//     Book.find({}).then(queryResults=> {
//         res.render('books', {books: queryResults});
//     }).catch(err => {
//         res.status(500).send(err)
//     })
// });
router.get('/:id', (req, res, next)=> {
    Book.findOne({'_id' : req.params.id}).populate('author', Author).then(queryResults=> {
        res.render('book', {book: queryResults});
    }).catch(err => {
        res.status(500).send(err)
    })
});


router.get('/create', (req, res, next)=> {
    Author.find({}, (err, authors)=> {
        err ? res.status(500).send(err) : res.render('create', {authors})

    })
});

router.post('/', (req, res, next)=> {
    debugger
    let author = mongoose.Types.ObjectId(req.body.author)
    debugger
    let newBook = {
        title: req.body.title,
        description: req.body.description,
        author: author,
        rating: req.body.rating
    };
    Book.create(newBook, (err)=> {
        debugger
        err ? res.status(500).send('Book not created') 
        : res.status(200).redirect('/')
    });
});

module.exports = router;
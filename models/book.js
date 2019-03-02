const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const bookSchema = new Schema ({
    title: String, 
    description: String, 
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    rating: Number,
    createdAt: Date,
    updatedAt: Date
})

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
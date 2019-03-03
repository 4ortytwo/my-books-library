const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const bookSchema = new Schema ({
    title: String, 
    description: String, 
    author: {type: Schema.Types.ObjectId, ref: 'authors'},
    rating: Number,
    reviews: [
        {
            user: String, 
            comments: String
        }
    ],
    createdAt: Date,
    updatedAt: Date
})

const Book = mongoose.model('books', bookSchema);

module.exports = Book;
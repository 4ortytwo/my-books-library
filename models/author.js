const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const authorSchema = new Schema ({
    image_url: String, 
    firstName: String,
    lastName: String, 
    nationality: String, 
    birthday: Date,
    createdAt: Date, 
    updatedAt: Date
});

const Author = mongoose.model('authors', authorSchema);

module.exports = Author;
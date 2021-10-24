let mongoose = require('mongoose');

//creating model class
let contactModel = mongoose.Schema({
    Name: String,
    Contact: String,
    Email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);
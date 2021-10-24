let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');
const { createIndexes } = require('./contact');

let User = mongoose.Schema(
    {
        username:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Username is Required'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Email is Required'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            required: 'Name is Required'
        },
        dateCreated:
        {
            type: Date,
            default: Date.now
        },
        dateUpdated:
        {
            type: Date,
            default: Date.now
        }
    },
    {
        collection: "users"
    }
);

//Configure options for User Model
let options = ({missingPassportError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);
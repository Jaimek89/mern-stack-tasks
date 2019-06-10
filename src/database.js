// Our way to connect with the database
const mongoose = require('mongoose')

//const URI = 'mongodb://localhost/mern-tasks' // To upload our App, URI needs to be undefined, because URI will be get from MongoDB Atlas

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
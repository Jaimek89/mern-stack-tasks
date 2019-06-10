// Our way to connect with the database
const mongoose = require('mongoose')

const URI = undefined
//'mongodb://localhost/mern-tasks' // To upload our App, URI needs to be undefined, because URI will be get from MongoDB Atlas

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
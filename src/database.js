// Our way to connect with the database
const mongoose = require('mongoose')

const URI = 'mongodb://jaimek89:jaimek89123@ds037145.mlab.com:37145/mern-stack-tasks-jaimek89'
//'mongodb://localhost/mern-tasks'

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose
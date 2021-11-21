const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const DB_URL = 'mongodb+srv://amazon:amazon@amazon.aqfif.mongodb.net/AmazonDB?retryWrites=true&w=majority'

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});



const User = mongoose.model('user', userSchema);


exports.createNewUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            return User.findOne({ email: email })
        }).then(user => {
            if (user){ mongoose.disconnect()
                 reject('email is Used')}
            else {
                return bcrypt.hash(password, 10)
            }
        }).then(hashedPassword => {
            let user = new User({
                username: username,
                email: email, password: hashedPassword
            })
            return user.save()
        }).then(() => {

            resolve()
            mongoose.disconnect()
        }).catch(err => {
            mongoose.disconnect(); reject(err)
        })
    }

    )
}




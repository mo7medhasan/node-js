const { ObjectID } = require('bson')
const mongoose = require('mongoose')

const DB_URL = 'mongodb+srv://amazon:amazon@amazon.aqfif.mongodb.net/AmazonDB?retryWrites=true&w=majority'

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    description: String,
    category: String
})

// const categorySchema = mongoose.Schema({
//     _id:ObjectID
//     name: String,
//     description: String,
//     main_category: ref''
        
// })


const Product = mongoose.model('product', productSchema)


exports.getAllProducts = () => {

    // connect to db 
    // get products
    // disconnect

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            console.log(':) connrct to db')
            return Product.find({})
        }).then(products => {

            resolve(products)
            mongoose.disconnect()
        }).catch(err => reject(err))
    })
}
exports.getAllProductsByCategory = (category) => {

    // connect to db 
    // get products
    // disconnect

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            console.log(':) connrct to db')
            return Product.find({
                category: category
            })
        }).then(products => {

            resolve(products)
            mongoose.disconnect()
        }).catch(err => reject(err))
    })
}


exports.getProductByID=id=>{
    return new mongoose.Promise((resolve,reject)=>
    mongoose.connect(DB_URL)
    .then(()=>{
        return Product.findById(id);
    }).then(product =>{
        mongoose.disconnect();
        resolve(product);
    })
    .catch(err => reject(err))
    
    
    )
}
exports.getFirstProduct=()=>{
    return new mongoose.Promise((resolve,reject)=>
    mongoose.connect(DB_URL)
    .then(()=>{
        return Product.findOne({});
    }).then(product =>{
        mongoose.disconnect();
        resolve(product);
    })
    .catch(err => reject(err))
    
    
    )

}

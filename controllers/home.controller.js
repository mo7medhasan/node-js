const productsModel = require('../models/product.models')






exports.getHome = (req, res, next) => {
    // get products
    // render indexedDB.ejs

    // if (err) {
    //     return res.status(400).json({
    //       status: 'error',
    //       error: 'req body cannot be empty',
    //     })}
    // get category
    //if category && !==all
    //          filter
    // else 
    // render all

    let category = req.query.category
    let validCategory = ['clothes', 'phones', 'pc', 'camera']
    
    let productsPromise
    if (category && validCategory.includes(category)) {
        productsPromise = productsModel.getAllProductsByCategory(category)
    } else {
        productsPromise = productsModel.getAllProducts()
    }

    productsPromise.then(products => {
        res.render('index', {
            products: products
        })

    })


}
// let category=req.query.category
// if(category&&category!=="all"){
//     productsModel.getAllProductsByCategory(category).then(products=>{
//         res.render('index',{
//             products:products
//         })
//     })
// }else {
//     productsModel.getAllProducts(category).then(products=>{
//         res.render('index',{
//             products:products
//         })

//     })
// }
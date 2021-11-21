
const productsModel=require ('../models/product.models')
exports.getProduct=(req,res,next)=>{
    productsModel.getFirstProduct()
    .then((product) =>{
        res.render('product',{
            product:product
        })
    })
}



exports.getProductById=(req,res,next)=>{
// get id 
// get product   
    // rouder

let id=req.params.id
productsModel.getProductByID(id)
.then((product) =>{
    res.render('product',{
        product:product
    })
})

}
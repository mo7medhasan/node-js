const express = require('express')

const path = require('path')


const homeRouter=require('./routes/home.route')
const authRouter=require('./routes/auth.route')

const productRouter=require('./routes/product.route')
const app = express();
const port =4000;


app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'image')))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use('/',homeRouter)
app.use('/',authRouter)
app.use('/product',productRouter)



app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(port, (err) => {
    // console.log(err)
    console.log(`listen server on port ${port}  (:    :} `);
})
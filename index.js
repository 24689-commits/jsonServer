const express = require('express')
const app = express()
const products ="http://localhost:3000/products"
const port = +process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.json({
        msg:"you are home"
    })
})
// getting all products
app.get('/products',(req,res)=>{
    res.json({
        status : res.statusCode,
        results : products
    })
})
// getting a single product
app.get('/product/?id=:id', (req, res)=>{
    const product = products[+req.params.id]
    res.json(
        {
            status : res.statusCode,
            results : product
        }
    )
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    })
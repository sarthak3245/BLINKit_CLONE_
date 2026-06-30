const express = require("express")
const port = 5000;
const mongoose = require("mongoose");
const Product = require("./models/product.model.js")  //work on it
const cors = require("cors");

const server = express();

server.use(cors());

server.use(express.json());
mongoose.connect("mongodb://localhost:27017/fs1125").then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err)
})

server.get("/products/category/:type" , async (req , res) => {
    const { type } = req.params;
    try {
        const products = await Product.find({
            category : type
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({message : error.message});   
    }
})

server.post("/products" , async(req , res) => {
    const {image, productname, time, quantity, amount, category} = req.body;
    try {
        const newProduct = new Product({
            image,
            productname,
            time,
            quantity,
            amount,
            category
        });
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})



server.put("/products/:id" , async (req , res) => {
    const {id} = req.params;
    const {isCart} = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { isCart },
            { new : true }
        );

        res.json(updatedProduct);
    
    } catch (error) {
        res.status(500).json({message : error.message});
    }
})


server.delete("/products/:id" , async (req, res) => {
    const {id} = req.params;
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({message : "Product not found"});
        }
        res.json({message : "Product deleted successfully !",
             deletedProduct

        });

    } catch (error) {
        res.status(500).json({message : error.message})
    }
})    

server.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

server.get("/products/cart" , async(req , res) => {
    try {
        const products = await Product.find({isCart : true});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message : error.message })
    }
})

server.listen(port , () => {
    console.log(`Server is runnung on port ${port}`);
})


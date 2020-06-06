import mongoose, { mongo } from 'mongoose';
import {ProductSchema} from '../models/productModel';
import { json } from 'body-parser';

//create product schema
const Product = mongoose.model('Product', ProductSchema);


//add new prpduct
export const addNewProduct = (req, res) => {
    let newProduct = new Product(req.body);

    newProduct.save((err, Product) => {
        if(err) {
            res.send(err);
        }
        res.json(Product);
    });
};

//get products
export const getProducts = (req, res) => {
    
    Product.find({}, (err, Product) => {
        if(err) {
            res.send(err);
        }
        res.json(Product);
    });
};


//update price
export const updatePrice = (req, res) => {
    
    Product.findOneAndUpdate({_id: req.params.ProductId}, req.body, {new: true }, (err, Product) => {
        if(err) {
            res.send(err);
        }
        res.json(Product);
    });
};

// delete product
export const deleteProduct = (req, res) => {
    Product.remove({_id: req.params.ProductId}, (err, Product) => {
        if(err) {
            res.send(err);
        }

        res.json({ message: 'Product deleted successfully'});
    });
};
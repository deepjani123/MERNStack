import mongoose from 'mongoose'

const Schema = mongoose.Schema;

//product schema
export const ProductSchema = new Schema ({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true,
        default: 0
    },
    productDescription: {
        type: String
    },
    productCreatedDate: {
        type: Date,
        default: Date.now
    }
});
import mongoose from 'mongoose'

const Schema = mongoose.Schema;


//user schema 
export const UserSchema = new Schema ({
    Email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
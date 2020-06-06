import mongoose from 'mongoose'

const Schema = mongoose.Schema;


//customer Schema
export const CustomerSchema = new Schema ({
    UID: {
        type: Number,
        required: true
    },
    cusName: {
        type: String,
        required: true
    },
    cusEmail: {
        type: String,
        required: true
    },
    cusApproved: {
        type: Boolean,
        default: false
    }
});
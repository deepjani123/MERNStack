import mongoose, { mongo } from 'mongoose';
import {CustomerSchema} from '../models/customerModel';
import { json } from 'body-parser';

//create schema variable
const Customer = mongoose.model('Customer', CustomerSchema);

//add new customer
export const addNewCustomer = (req, res) => {
    let newCustomer = new Customer(req.body);

    //save function called
    newCustomer.save((err, Customer) => {
        if(err) {
            res.send(err);
        }
        res.json(Customer);
    });
};

//get to get customer
export const getCustomers = (req, res) => {
    
    Customer.find({}, (err, Customer) => {
        if(err) {
            res.send(err);
        }
        res.json(Customer);
    });
};

//approve customer
export const approveCustomer = (req, res) => {
    
    Customer.findOneAndUpdate({_id: req.params.CustomerId}, req.body, {new: true }, (err, Customer) => {
        if(err) {
            res.send(err);
        }
        res.json(Customer);
    });
};


//delete customer
export const deleteCustomer = (req, res) => {
    Customer.remove({_id: req.params.CustomerId}, (err, Customer) => {
        if(err) {
            res.send(err);
        }

        res.json({ message: 'Customer deleted successfully'});
    });
};
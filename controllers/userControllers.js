import mongoose, { mongo } from 'mongoose';
import {UserSchema} from '../models/userModel';
import { json } from 'body-parser';

const User = mongoose.model('User', UserSchema);


//add new user. there is no front end created for this api
export const addNewUser = (req, res) => {
    let newUser =new User(req.body);

    newUser.save((err, User) => {
        if(err)
        {
            res.send(err);
        }
        res.json(User);
    });
}

//verify user details. / will return 200 on successful login
export const getUser = (req, res) => {

    User.findOne({Email: req.body.Email, password: req.body.password}, (err, User) => {
        if(err) {
            res.send(err);
            return res.status(500).send();
        }
        
        if(!User) {
            return res.status(404).send();
        }

        return res.status(200).send();
    });
    
};


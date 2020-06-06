import {getUser, addNewUser} from '../controllers/userControllers';

const userRoute = (app) => {

    //verify user login credentials. will return 200.
    app.route('/login').post(getUser);

    //add new user. no UI available for this api.
    app.route('/adduser').post(addNewUser);
    
    
}

export default userRoute;
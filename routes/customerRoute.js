import { addNewCustomer, 
    getCustomers,
    approveCustomer,
    deleteCustomer } from '../controllers/customerControllers';


//route for customer crud
const routeCustomer = (app) => {
    //get method to get all customer details
    app.route('/customers')
    //GET endpoint
    .get(getCustomers)
    //POST endpoint to add new customer
    .post(addNewCustomer);

    //  :customerId will accept _id attribute
    app.route('/customer/:CustomerId')
    
    //approve customer
    .put(approveCustomer)

    //delete customer
    .delete(deleteCustomer);
}

export default routeCustomer;
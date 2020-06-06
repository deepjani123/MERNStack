import { addNewProduct, 
    getProducts,
    updatePrice,
    deleteProduct } from '../controllers/productControllers';

const routes = (app) => {
    app.route('/products')
    //GET endpoint to get product details
    .get(getProducts)
    //POST endpoint to add new product
    .post(addNewProduct);

    //put end point will accept ._id as an argument
    app.route('/product/:ProductId')
    
    //update product price
    .put(updatePrice)
    //delete product 
    .delete(deleteProduct);
}

export default routes;
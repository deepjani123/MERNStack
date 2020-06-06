import express from 'express';
import mongoose, { mongo } from 'mongoose';
import bodyparser from 'body-parser';
import routes from './routes/productRoute';
import cors from 'cors';
import cusRoute from './routes/customerRoute';
import userRoute from './routes/userRoute';


const app = express();
const PORT = 4000;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//bodyparser setup
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//setup CORS
app.use(cors());

//pass app to routes

routes(app);
cusRoute(app);
userRoute(app);


app.get('/', (req, res) =>
    res.send(`Our Product Website is running on ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your product website server is on port ${PORT}`)
);
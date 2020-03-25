import  express from 'express';
import router from './routes/route';
import {db_connections} from './db/connection';


require('dotenv').config();

const app = express();

//middlewares
app.use(express.json());
app.use('/lostAndFound', router);

const port = process.env.PORT || 3000;

//connecting to mongodb data base;
db_connections();

app.listen(port, 
    ()=> console.log(`our app is running, can be accessed now on http://localhost:${port}/lostAndFound`));
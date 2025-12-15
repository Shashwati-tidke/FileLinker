import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import DBConnection from './database/db.js';

const app = express();

//allow frontend (5173) to call backend (8000)

app.use(cors());



app.use("/", router);

DBConnection();


app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
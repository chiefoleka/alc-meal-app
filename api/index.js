import express from 'express';
import dotenv from 'dotenv';
import mealsRoute from './routes/mealsRoute';

dotenv.config();

const app = express();

app.use('/api/v1/meals', mealsRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT);

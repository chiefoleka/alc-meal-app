import express from 'express';
import mealsRoute from './routes/mealsRoute';

const app = express();

app.use('/api/v1/meals', mealsRoute);

const PORT = 8080;
app.listen(PORT);

require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');

const catchAsync = require('./utils/catchAsync');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoute');
const shareRouter = require('./routes/shareRoute');
const portfolioRouter = require('./routes/portfolioRoute');
const transactionRouter = require('./routes/transactionRoute');

const app = express();

app.use(express.json());

// all routes will be here
app.use('/api/v1/user', userRouter);
app.use('/api/v1/share', shareRouter);
app.use('/api/v1/portfolio', portfolioRouter);
app.use('/api/v1/transaction', transactionRouter);

app.use(
    '*',
    catchAsync(async (req, res, next) => {
        throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
    })
);

app.use(globalErrorHandler);

const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});
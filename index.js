require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bike_router = require('./routers/bike_router');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: ['https://k-client.vercel.app']}));
app.use('/bike', bike_router);

const start = async () => {
    await mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    app.listen(PORT, () => {});
};

start();
require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errMiddleware = require("./middleware/error-handler");
const productRoute = require("./routes/products");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(
        `<h1>STORE API</h1><a href="/api/v1/products">products route</a>`
    );
});

app.use("/api/v1/products", productRoute);
app.use(notFoundMiddleware);
app.use(errMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        //connnectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`listening to ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();

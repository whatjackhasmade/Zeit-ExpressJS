const express = require("express");
const jokesRoute = require("./routes/jokes");
const app = express();

app.use(express.urlencoded({ extended: false }));

// add all of the routes in the API here
app.get("/jokes", jokesRoute);

app.listen(8000);

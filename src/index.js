const express = require("express");
const cors = require("cors");
const jokesRoute = require("./routes/jokes");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

// add all of the routes in the API here
app.get("/jokes", jokesRoute);

app.listen(8000);

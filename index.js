const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Running with Docker!");
});

const routeAPISay = require("./Routes/apiSay");
app.use("/api", routeAPISay);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

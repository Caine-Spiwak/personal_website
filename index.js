import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


// Date
const date = new Date();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Pages
app.get("/", (req, res) => {
    res.render("index.ejs", { date: date})
});

// Server
app.listen(port, () => {
    console.log(`Listeniing on port ${3000}`);
});

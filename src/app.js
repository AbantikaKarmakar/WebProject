const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;

// public static path 
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, "../templates/views"); // if not using views folder
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

// built in middleware
app.use(express.static(staticPath));

app.get("/", (req,res) => {
    res.render('index');
});

app.get("/about", (req,res) => {
    res.render('about');
});

app.get("/weather", (req,res) => {
    res.render('weather');
});

app.get("*", (req,res) => {
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`listensing to the port at ${port}`)
});
const express = require('express');
const app = express();
const port = 3002;

//  Express Server
const server = app.listen(port, () => {
    console.log("Server listening on port " + port);
});

//  Templating Engine
app.set('view engine', 'pug');

app.set("views", "views");

//  Server Turns On
app.get("/", (req, res, next) => {
    res.status(200).render("home");
})
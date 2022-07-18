
const express = require("express");

const hbs = require("hbs");

const app = express();

const port = 3000 ;

app.set("view engine","hbs");  // set the view engine

// built in middleware
// app.use(express.static("C:/node nikunj/express_js"));

// template engine route
app.get("/", (req,res) => {
    res.render("C:/node nikunj/hbs_template_engin/index");  // we are use sender into render & here we are add index or index.hbs both time run index.hbs
});

app.listen(port, () => {
    console.log("listing the port at 3000");
}); 
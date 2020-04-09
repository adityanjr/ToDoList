const express = require("express")
const bodyParser = require("body-parser");

let items = ["Buy", "Cook", "Eat"]; //for scope
let workItems = [];

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    
    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("hi-IN", options);
	
    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req,res){
    
    let item = req.body.newItem;
    
    if(req.body.list == "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
    res.render("about");
});

app.listen(8000, function(){
	console.log("Server at 8000");
})
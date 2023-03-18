const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const url = "mongodb+srv://katasaninikhith:Nikhith99!@cluster0.9b6ayv8.mongodb.net/test";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema(
  {
    data: Object,
  },
  { collection: "Register" }
);

const Form = mongoose.model("Form", formSchema);

const formData = (bodyData) => {
  Form({ data: bodyData }).save((err) => {
    if (err) {
      throw err;
    }
  });
};

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/register.ejs", (req, res) => {
    res.render("register");
  });
app.post("/", urlencodedParser, (req, res) => {
  formData(req.body);
  res.render("success", { name: req.body.name });
});

server.listen(3030);
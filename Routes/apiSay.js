const express = require("express");
const route = express.Router();
const SayController = require("../Controller/SayController");
const QuestionController = require("../Controller/QuestionController");

route.get("/sayHello", SayController.sayHello);
route.get("/sayBye", SayController.sayBye);
route.post("/sayQuestion", QuestionController.howAreYou);

module.exports= route;
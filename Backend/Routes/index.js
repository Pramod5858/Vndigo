import express from "express";

import {getLocations, postlocations} from "../Controller/locations.js";
// const locationController = require("../Controller/locations.js");

//import {getSignup} from "../";
//const signupController = require("../Controller/users.js");

import {postfeedbackform, getfeedback} from "../Controller/feedbackform.js";
//const feedbackformController = require("../Controller/feedbackform.js");

import {signup, login} from "../Controller/users.js";

const route = express.Router();

route.get("/locations", getLocations);

route.post("/postlocations",postlocations);

route.post("/feedbackform", postfeedbackform);
// route.get("/signup", getSignup);

route.get("/getfeedback", getfeedback);

route.post("/signup", signup)

route.post("/login", login)


export default route;
//module.exports = route;
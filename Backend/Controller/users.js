
import users from "../Model/users.js";
//const Signup = require("../Model/users.js");

import ErrorHandler from "../Utils/error.js";

import bcrypt from "bcrypt";

import { asynError } from "../errorHandlermiddleware/error.js"

export const getSignup = asynError(async (req, res, next) => {

    users.find()
        .then(response => {
            res.status(200).json({
                message: "details signup fetched successfully",

                sigup: response
            })
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })

})

export const signup = asynError(async (req, res, next) => {
    const {role, name, email, password} = req.body;

    const findemail = await users.findOne({ email: email });

    if (findemail) {
        return next(new ErrorHandler("Allready email is registered, please try with new email_ID", 400))
    }

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashpassword = await bcrypt.hash(password, salt);

    const useradd = await users.create({
        
        name: name,
        email: email,
        password: hashpassword,
        role

    })

    console.log(useradd);
    res.status(200).send({success:true, useradd});
})

export const login = asynError(async(req, res, next) =>{
const { email, password} = req.body;

const findemail = await users.findOne({email:email})

    if(!findemail){
       return next(new ErrorHandler("No email found, you need to first signup then do login", 400))
    }

    let checkpassword = await bcrypt.compare(password, findemail.password);

    if(!checkpassword){
        return next(new ErrorHandler("password not match", 400))
    }

    let data = {
        user: {
            id: findemail.id,
            name: findemail.name,
            email: findemail.email,
            role: findemail.role
        }
    }

    console.log(data);
    res.status(200).send({success:true, data, role:data.user.role})

})
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'Whoar$eyou'

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/createuser', [
    body('name','Enter a valid name').isLength({min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be at least 5 characters').isLength({min: 5})
], async(req, res)=> {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
   
    try{
    // Check weather the user with this email exists already
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error: "Sorry, a user with this email already exist"})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)

    // Create a new user
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email
        })
        /*
        .then(user => res.json(user))
        .catch(err=> {console.log(err)
        res.json({error: 'Please enter a unique value for email', message: err.message})})
        */
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);

        res.json(authtoken);

        // catch errors
        }catch(error){
            console.error(error.message)
            res.status(500).send("Some Error occured")
        }
    })

module.exports = router
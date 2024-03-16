const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create user using POST "/api/auth/"
router.post('/createuser', [
    // Adding Validations
    body('name', "Enter Name").notEmpty(),
    body('email', "Enter Valid Email").isEmail(),
    body('password', "Password must be 6 digit long").isLength({ min: 6 }),
], async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);

    // check if any errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    try {
        //check email already exits
        let user = await User.findOne({ email: req.body.email });   // await becuase its a promise
        console.log(user);
        if (user != null) {
            return res.status(400).json({ error: "User Already Exits" });
        }

        // save data to databse
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })

        res.json(user)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Something went wrong");   
    }
});

module.exports = router
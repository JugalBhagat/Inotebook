const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

//create user using POST "/api/auth/"

router.post('/', [
        body('name',"Enter Name").notEmpty(),
        body('email',"Enter Valid Email").isEmail(),
        body('password',"Password must be 6 digit long").isLength({ min: 6 }),
    ], (req, res) => {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
        }).then(user=>res.json(user))
        .catch(err=>{console.log(err);
        res.json({error:"Please Enter Unique Email Address"})});
});

    
    module.exports = router
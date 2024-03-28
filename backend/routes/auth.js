const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = "jUgALBhaGAt";

//create user using POST "/api/auth/createuser"
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
        // console.log(user);
        if (user != null) {
            return res.status(400).json({ error: "User Already Exits" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt)

        // save data to databse
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken)

        // res.json(user)
        res.json({ "authToken": authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
});

//create user using POST "/api/auth/login"
router.post('/login', [
    // Adding Validations
    body('email', "Enter Valid Email").isEmail(),
    body('password', "Password must be 6 digit long").isLength({ min: 6 }),
], async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    // check if any errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success=false;
            return res.status(400).json({ success ,error: "Incorrect credential (not exists) " });
        }
        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            success=false;
            return res.status(400).json({ success ,error: "Incorrect credential (incorrent password) " });
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(payload, JWT_SECRET);
        // console.log("AuthToken = ",authToken)
        success=true;
        res.json({"success":success,"authToken": authToken })

    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Something went Wrong");
    }
});

//Get User Details "/api/auth/getUserDetails"
router.post('/getUserDetails',fetchUser, async (req, res) => {
    try {
        userId=req.user.id;
        const user=await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        // console.error(error.message);
        res.status(500).send("Something went Wrong");
    }
});

module.exports = router
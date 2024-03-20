const express = require('express');
const Note = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const router = express.Router();


// fetch all notes of user using GET "/api/note/fetchallnotes"
router.get('/fetchallnotes', fetchUser , async (req, res) => {
    try {
        const notes = await Note.find({ user : req.user.id });
        // console.log(req.user.id);
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error:"Something went wrong"})
    }   
})

// create new note using POST "/api/note/newnote"
router.post('/newnote', fetchUser, [
    body('title', "Enter a valid title").isLength({ min: 3 }),
    body('description', "Enter Description").notEmpty(),],
    async (req, res) => {

    const {title,description,tag}=req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).json({ errors: error.array() });
    }
    try {
        const note=new Note({
            title,description,tag,user:req.user.id
        })
        const savedNote=await note.save();
        res.send(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong");
    }
})

module.exports = router;
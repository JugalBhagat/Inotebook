import React, { useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {
    const notesInit = [
        {
            "_id": "65fa7bfcc285660792941dcca1",
            "user": "65f92aa2dd8ef48d1b9fa0d3f",
            "title": "day:1",
            "description": "Hello this my 1st day at Pune, Today my parents came to drop me, They left in the afternoon",
            "tag": "Clg",
            "date": "2024-03-20T06:02:36.364Z",
            "__v": 0
        },
        {
            "_id": "65fa7bbbc285606092941dcc82",
            "user": "65f92aa2dd8ef-4d1b9fa0d3f",
            "title": "day:2",
            "description": "Hello this my 2nd day at Pune, Today I watched a movie Black Pather 2, Clg is starting from tomorow",
            "tag": "movie",
            "date": "2024-03-20T06:01:31.643Z",
            "__v": 0
        },
        {
            "_id": "65fa7bbbc2852636092941dcc83",
            "user": "65f92aa2dd8e2f4d1b9fa0d3f",
            "title": "day:3",
            "description": "Hi this my 3rd day at Pune, Today went to the collage, collage is full of shitty people",
            "tag": "collage",
            "date": "2024-03-20T06:01:31.643Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897cd405c7b7ec7d4",
            "user": "65f92aa2dd8e34f4d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897c3d05c7b7ec7d5",
            "user": "65f92aa2dd8e4f4d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897cd05c7b27ec7d6",
            "user": "65f92aa2dd8ef44d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        }
    ]

    //Add Note
    const addNote = (title,description,tag) => {
        //TODO API call
        console.log("Adding New Note");
        const note={
            "_id": "65fad7d98897cd05c7b27ec7d612",
            "user": "65f92aa2dd8ef44d1b9fa0d3f34",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    //Delete Note
    const delNote = (id) => {
        console.log("Deleting..."+id);
        const newNote=notes.filter((note)=>{return note._id!==id})
        setNotes(newNote)
    }
    //Edit Note
    const editNote = () => {

    }

    const [notes, setNotes] = useState(notesInit);
    return (
        <notesContext.Provider value={{ notes, addNote,delNote,editNote }}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
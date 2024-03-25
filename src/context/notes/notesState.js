import React, { useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {
    const notesInit = [
        {
            "_id": "65fa7bfcc28566092941dcca",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day:1",
            "description": "Hello this my 1st day at Pune, Today my parents came to drop me, They left in the afternoon",
            "tag": "Clg",
            "date": "2024-03-20T06:02:36.364Z",
            "__v": 0
        },
        {
            "_id": "65fa7bbbc28566092941dcc8",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day:2",
            "description": "Hello this my 2nd day at Pune, Today I watched a movie Black Pather 2, Clg is starting from tomorow",
            "tag": "movie",
            "date": "2024-03-20T06:01:31.643Z",
            "__v": 0
        },
        {
            "_id": "65fa7bbbc28566092941dcc8",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day:3",
            "description": "Hi this my 3rd day at Pune, Today went to the collage, collage is full of shitty people",
            "tag": "collage",
            "date": "2024-03-20T06:01:31.643Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897cd05c7b7ec7d",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897cd05c7b7ec7d",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        },
        {
            "_id": "65fad7d98897cd05c7b7ec7d",
            "user": "65f92aa2dd8ef4d1b9fa0d3f",
            "title": "day-4 Updated",
            "description": "Second day of collage, This is the day I started thinking, I have made terrible Mistake",
            "tag": "what a Shitty collage !",
            "date": "2024-03-20T12:34:33.748Z",
            "__v": 0
        }
        
    ]
    const [notes,setNotes]=useState(notesInit);
    return (
        <notesContext.Provider value={{ notes,setNotes }}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
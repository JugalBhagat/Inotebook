import React, { useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {
    const notesInit = [];

    //Get all Notes
    const getallNotes=async()=>{
        const response=await fetch(`http://localhost:4000/api/note/fetchallnotes`,{
            method:"GET",
            headers:{
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmOTJhYTJkZDhlZjRkMWI5ZmEwZDNmIn0sImlhdCI6MTcxMDkzNzA5MH0.3zv-krn9lin9MvccdkgXcXu8GOw-9VhsJHVtm1oLLuM"
            }
        });
        const json=await response.json();
        console.log(json);
        setNotes(json);
    }

    //Add Note
    const addNote = async(title,description,tag) => {
        
        const response=await fetch(`http://localhost:4000/api/note/newnote`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmOTJhYTJkZDhlZjRkMWI5ZmEwZDNmIn0sImlhdCI6MTcxMDkzNzA5MH0.3zv-krn9lin9MvccdkgXcXu8GOw-9VhsJHVtm1oLLuM"
            },
            body:JSON.stringify({title,description,tag})
        });
        const json=response.json();
        console.log("Added ",json)
        
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
    const delNote = async(id) => {
        const response=await fetch(`http://localhost:4000/api/note/deletenote/${id}`,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmOTJhYTJkZDhlZjRkMWI5ZmEwZDNmIn0sImlhdCI6MTcxMDkzNzA5MH0.3zv-krn9lin9MvccdkgXcXu8GOw-9VhsJHVtm1oLLuM"
            }
        });
        const json=response.json();
        console.log(json);
        
        console.log("Deleting..."+id);
        const newNote=notes.filter((note)=>{return note._id!==id})
        setNotes(newNote)
    }
    
    //Edit Note
    const editNote = async(id,title,description,tag) => {
        
        const response=await fetch(`http://localhost:4000/api/note/updatenote/${id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmOTJhYTJkZDhlZjRkMWI5ZmEwZDNmIn0sImlhdCI6MTcxMDkzNzA5MH0.3zv-krn9lin9MvccdkgXcXu8GOw-9VhsJHVtm1oLLuM"
            },
            body:JSON.stringify({title,description,tag})
        });
        const json=response.json();
        console.log("Editing",json);

        for(let index=0;index<=notes.length;index++)
        {
            if(notes[index]._id===id)
            {
                notes[title]=title;
                notes[description]=description;
                notes[tag]=tag;
            }
        }
    }

    const [notes, setNotes] = useState(notesInit);
    return (
        <notesContext.Provider value={{ notes, addNote,delNote,editNote,getallNotes }}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
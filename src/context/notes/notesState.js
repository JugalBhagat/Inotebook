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

        const note=await response.json();
        console.log("Added ",note)
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
        const json=await response.json();
        const newNote=notes.filter((note)=>{return note._id!==id})
        console.log("Deleted : ",json);
        setNotes(newNote)
    }
    
    //Edit Note
    const editNote = async(id,title,description,tag) => {
        const response=await fetch(`http://localhost:4000/api/note/updatenote/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmOTJhYTJkZDhlZjRkMWI5ZmEwZDNmIn0sImlhdCI6MTcxMDkzNzA5MH0.3zv-krn9lin9MvccdkgXcXu8GOw-9VhsJHVtm1oLLuM"
            },
            body:JSON.stringify({title,description,tag})
        });

        // eslint-disable-next-line
        const json=await response.json();

        let newnote=JSON.parse(JSON.stringify(notes))

        for(let index=0;index<notes.length;index++)
        {
            const element = notes[index];
            if(element._id===id)
            {
                newnote[index].title=title;
                newnote[index].description=description;
                newnote[index].tag=tag;
                break;
            }
        }
        console.log("Edited Note : ",json)
        setNotes(newnote)
    }

    const [notes, setNotes] = useState(notesInit);
    return (
        <notesContext.Provider value={{ notes, addNote,delNote,editNote,getallNotes }}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
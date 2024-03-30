import React, { useState } from "react";
import notesContext from "./notesContext";

const NotesState = (props) => {
    const notesInit = [];

    const getallNotes=async()=>{
        try{
            const response=await fetch(`http://localhost:4000/api/note/fetchallnotes`,{
                method:"GET",
                headers:{
                    "auth-token":localStorage.getItem("token")
                }
            });
            const json=await response.json();
            console.log(json);
            setNotes(json); 
        }catch(e)
        {
            console.log(e);
        }
    }

    //Add Note
    const addNote = async(title,description,tag) => {
        try{
            const response=await fetch(`http://localhost:4000/api/note/newnote`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem("token")
                },
                body:JSON.stringify({title,description,tag})
            });

            const note=await response.json();
            console.log("Added ",note)
            setNotes(notes.concat(note));     
        }catch(e)
        {
            console.log(e);
        }
    }
    
    //Delete Note
    const delNote = async(id) => {
        try{
            const response=await fetch(`http://localhost:4000/api/note/deletenote/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem("token")
                }
            });
            const json=await response.json();
            const newNote=notes.filter((note)=>{return note._id!==id})
            console.log("Deleted : ",json);
            setNotes(newNote)
        }catch(e)
        {
            console.log(e);
        }
    }
    
    //Edit Note
    const editNote = async(id,title,description,tag) => {
        try{
            const response=await fetch(`http://localhost:4000/api/note/updatenote/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "auth-token":localStorage.getItem("token")
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
        }catch(e){
            console.log(e);
        }
    }

    const fetchUserDetail=async()=>{
        const response=await fetch(`http://localhost:4000/api/auth/getUserDetails`,{
            method:"POST",
            headers:{
                "auth-token":localStorage.getItem("token")
            }
        });
        const json=await response.json();
        console.log(json)
        return await JSON.parse(JSON.stringify(json));
    }

    const [notes, setNotes] = useState(notesInit);
    return (
        <notesContext.Provider value={{ notes, addNote,delNote,editNote,getallNotes,fetchUserDetail }}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
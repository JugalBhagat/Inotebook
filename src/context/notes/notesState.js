import React, { useState } from "react";
import notesContext from "./notesContext";

const NotesState=(props)=>{
    const data1={
        "name":"Jugal Bhagat",
        "email":"jugalbhahat017@gmail.com"
    }
    const data2={
        "name":"Keval Parmar",
        "email":"kevalparmar@gmail.com"
    }
    const [state,setState]=useState(data1);
    const update=()=>{
        setTimeout(() => {
            setState(data2);
        }, 2000);
    }
    return (
        <notesContext.Provider value={{state,update}}>
            {props.children}
        </notesContext.Provider>
    )
}

export default NotesState;
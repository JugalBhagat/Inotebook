import React,{useState} from 'react';
import {
    Link
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [creds,setCreds]=useState({name:"",email:"",password:""});
    let navigate = useNavigate();

    const handleSignup=async(e)=>{
        try{
            e.preventDefault();
            const response=await fetch('http://localhost:4000/api/auth/createuser',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name:creds.name,email:creds.email,password:creds.password})
            });
            const json=await response.json();
            console.log(json);
            navigate("/login");
        }catch(e){
            console.log(e);
        }
    }

    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })          //to keep default value
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 col-sm-12">
                    <div className="card ">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Signup here</h1>
                            <form onSubmit={handleSignup}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" value={creds.name} onChange={handleOnChange} name="name" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="email" value={creds.email} onChange={handleOnChange} name="email" placeholder="Email Id" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" value={creds.password} onChange={handleOnChange} name="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup

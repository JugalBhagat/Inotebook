import React,{useState} from 'react';
import {
    Link
} from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Login() {
    const [creds,setCreds]=useState({email:"",password:""});
    let navigate = useNavigate();

    const handleLogin=async(e)=>{
        e.preventDefault();
        const response=await fetch('http://localhost:4000/api/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:creds.email,password:creds.password})
        });
        const json=await response.json();
        console.log(json);
        if(json.success)
        {
            localStorage.setItem("token",json.authToken);
            navigate("/");
        }
        else
            alert("Invalid Creds");
    }

    const handleOnChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })          //to keep default value
    }

    return (
        <div className="container mt-5 ">
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Login here</h1>
                            <form  onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="email" value={creds.email} onChange={handleOnChange} id="email" placeholder="Email Id" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" name="password" value={creds.password} onChange={handleOnChange} id="password" placeholder="Password" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="remember" />
                                    <label className="form-check-label" >Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                                <p><a href="/">Forgot password?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

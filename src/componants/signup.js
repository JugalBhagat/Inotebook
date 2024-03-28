import React from 'react'
import {
    Link,
} from "react-router-dom";

function Signup() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 mt-5 col-sm-12">
                    <div className="card ">
                        <div className="card-body">
                            <h1 className="text-center mb-4">Signup here</h1>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="email" name="email" placeholder="Email Id" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
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

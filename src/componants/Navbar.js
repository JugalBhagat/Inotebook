import React, { useEffect } from 'react';
import { useContext } from 'react';
import notesContext from '../context/notes/notesContext';
import {
    Link, useNavigate,
} from "react-router-dom";

import { useLocation } from 'react-router-dom';

function Navbar() {
    const context = useContext(notesContext);
    const { fetchUserDetail } = context;
    let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const usedel= fetchUserDetail();
        // console.log(usedel);
        // eslint-disable-next-line
    }, [])

    const handle_Signout = () => {
        localStorage.removeItem("token");
        console.log(localStorage.getItem("token"));
        window.location.reload();
        navigate("/login");
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-3 bg-dark">
                <div className="container-fluid">
                    <img className="m-2" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/notepad-512.png" width={40} alt="Logo  " />
                    <Link className="navbar-brand" to="/">Inotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {/* {!localStorage.getItem("token") ? <form className="d-flex">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <Link className="btn btn-primary mx-1" onClick={handle_Signout} role="button">Logout</Link>} */}
                    </div>
                </div>
                <ul className="menu">
                    <li className="menu-item">
                        <img className='round-img profile' src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?w=50" alt="user" />
                        <ul className='sub-menu'>
                            <li className="menu-item sub-item1 lli">
                                <i className="fa-solid fa-id-card"></i>
                                <p>ID :  <label className='fetchdata' htmlFor="id">3498587345687346</label></p>
                            </li>
                            <li className="menu-item sub-item1 lli">
                                <i className="fa-solid fa-signature"></i>
                                <p>Name : <label className='fetchdata' htmlFor="name">jugal bhagat</label></p>
                            </li>
                            <li className="menu-item sub-item1 lli">
                                <i className="fa-solid fa-envelope"></i>
                                <p>Email : <label className='fetchdata' htmlFor="email">jugalbhagat@gmail.com</label></p>
                            </li>
                            <li className="menu-item sub-item1 lli">
                                <i className="fa-solid fa-phone"></i>
                                <p>Mobile : <label className='fetchdata' htmlFor="mobile">35475894</label></p>
                            </li>
                            <hr className='horline' />
                            {
                                !localStorage.getItem("token") ?
                                    <li className="menu-item sub-item lli">
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                        <p>Login</p>
                                    </li> :
                                    <li className="menu-item sub-item lli" onClick={handle_Signout} role="button">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <p>Logout</p>
                                    </li>
                            }
                        </ul>
                    </li>
                </ul>
            </nav >
        </div >
    )
}

export default Navbar

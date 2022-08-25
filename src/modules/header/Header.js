// import { ReactComponent } from '*.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md py-0 bg-black">
            <div className="container-fluid navbar-container">
                <Link className="navbar-brand mx-0" to=""><img className="d-none d-md-inline" src="Logo.png" height="38px" width="40px"/><span className="mb-0">Indian Oil Retired Officers' Association<span className="mt-0 sub-text d-none d-md-block text-center">Eastern Region, Kolkata</span></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="rgb(255, 165, 0)" className="bi bi-list" viewBox="0 0 14 14">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                </button>
                <div className="collapse navbar-collapse ml-3 justify-content-center px-2 pb-2" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item px-3">
                            <Link className="nav-link active" aria-current="page" to="">Home</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link active" to="/agm">AGM & Retreat</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link active" to="/registration">New Member Registration</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link active" to="/knowyourbenefits">Our Benefits</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link active" to="/info">Information</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
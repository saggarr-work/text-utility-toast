import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>        {/* prop to show title, check app.js */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About Functionality</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input onClick={props.toggleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <span className="material-symbols-outlined" id='toggler'>dark_mode</span>
        </div>
      </div>
    </div>
  </nav>
  )
}

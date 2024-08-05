import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-${props.mod}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className={`form-check mx-2 text-${props.mode === 'light' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={props.toggleModeLight} id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Light
                            </label>
                        </div>
                        <div className={`form-check mx-2 text-${props.mode === 'light' || 'success' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={props.toggleModeDark} id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Shadow
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={props.toggleModeRed} id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Sun
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={props.toggleModeBlue}id="flexRadioDefault4" />
                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                Moon
                            </label>
                        </div>
                        <div className="form-check mx-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" onClick={props.toggleModeGreen} id="flexRadioDefault5" />
                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                Earth
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = { title: "Fiddle with Texts", about: "About" };
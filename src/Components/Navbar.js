import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.about}</a>
                            </li>
                        </ul>
                        <div className={`form-check mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
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
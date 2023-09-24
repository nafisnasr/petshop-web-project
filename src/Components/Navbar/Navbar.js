import React, { useState } from 'react'
import { PiSignInBold } from "react-icons/pi"
import "./Navbar.css"
import SignInModal from '../SignInModal/SignInModal'

export default function Navbar() {

    const [showModal, setShowModal] = useState(false)

    return (
        <nav className="navbar navbar-expand-lg nav ">
            <div className="nav-wrapper container py-2">
                <a className="navbar-brand navicon" href="#">Pet Care</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item mx-4">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item mx-4">
                            <a className="nav-link">Med-Care</a>
                        </li>
                    </ul>
                    <div className="navbar_register">
                        <button
                            className='navbar_sign-in link Btn'
                            onClick={() => setShowModal(true)}
                        >
                            Sign in
                            <PiSignInBold className='register_icon' />
                        </button>
                    </div>
                    <SignInModal
                        show={showModal}
                        onHide={() => setShowModal(false)}
                    />
                </div>
            </div>
        </nav>
    )
}

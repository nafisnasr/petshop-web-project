import React from 'react'
import { HiMiniArrowUpRight } from "react-icons/hi2"
import { BiPhone } from "react-icons/bi"
import "./Header.css"


export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-wrapper row">
                    <div className="header_left-section col-lg-6 col-11">
                        <h1 className="header_title">Care of your</h1>
                        <h1 className="header_title">Little pets</h1>
                        <div className="header_text my-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, porro?Lorem ipsum dolor sit amet.
                        </div>
                        <div className="header_btn-container">
                            <button className='services-btn Btn'>
                                Our Services
                                <HiMiniArrowUpRight className='header_btn-icon' />
                            </button>
                            <button className="reserve-btn Btn">
                                <BiPhone className='header_btn-icon' />
                                Schedule a call
                            </button>
                        </div>
                    </div>
                    <div className="header_right-section col-lg-6 col-11">
                        <div className="header_img-container">
                            <img
                                src="/images/header-bg.jpg"
                                alt="Header background"
                            />
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}
